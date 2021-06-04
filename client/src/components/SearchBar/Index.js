import React, { useState, useEffect } from "react";

import {
  Search,
  Search__Inner,
  Search__SearchBar,
  Search__Form,
  Search_Results,
  Search_Results_Layout,
  Search_Results_Segments,
} from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./../../context/StateProvider";
import Fuse from "fuse.js";
import { data } from "./../../Data/Info";

const SearchBar = ({ toggle }) => {
  const [{ term, results }, dispatch] = useStateValue();
  const [searchData, setSearchData] = useState(data);

  const [input, setInput] = useState("");
  const history = useHistory();

  const searchItem = (query) => {
    if (!query) {
      setSearchData(data);
      return;
    }
    const fuse = new Fuse(data, {
      keys: ["Title", "tags"],
      threshold: 0.5,
    });
    const result = fuse.search(query);
    const finalResult = [];
    if (result.length) {
      result.forEach((item) => {
        finalResult.push(item.item);
      });
      setSearchData(finalResult);
    } else {
      setSearchData([]);
    }
  };

  const search = (e) => {
    e.preventDefault();
    console.log("button clicker", input);

    // add the input to data layer

    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });

    //redirect to /search
  };

  const productDetails = () => {
    toggle();
  };

  console.log(searchData);
  console.log(term);

  return (
    <Search>
      <Search__Inner>
        <Search__SearchBar>
          <Search__Form onSubmit={search}>
            <input
              type='search'
              placeholder='Search for a keyword...'
              className='input'
              autofocus='true'
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                searchItem(e.target.value);
              }}
            />
          </Search__Form>
        </Search__SearchBar>
      </Search__Inner>
      {searchData.map((item) => (
        <Search_Results>
          <Search_Results_Layout>
            <Search_Results_Segments>
              <img
                className='image'
                src={item.image}
                alt=''
                onClick={productDetails}
              />
              <div class='ProductItem__Info'>
                <h2 class='ProductItem__Title '>{item.Title}</h2>
                <div class='ProductItem__PriceList  '>
                  <span class='ProductItem__Price ' data-money-convertible=''>
                    <span class='money'>{item.price}</span>
                  </span>
                </div>
              </div>
            </Search_Results_Segments>
          </Search_Results_Layout>
        </Search_Results>
      ))}
    </Search>
  );
};

export default SearchBar;
