import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./../../context/StateProvider";
import Fuse from "fuse.js";
import data from "./../../Data/Info";

const SearchBar = ({ toggle }) => {
  const [{ term, results }, dispatch] = useStateValue();
  const [searchData, setSearchData] = useState(data);

  const [input, setInput] = useState("");

  const searchItem = (query) => {
    if (!query) {
      setSearchData(data);
      return;
    }
    const fuse = new Fuse(data, {
      keys: ["name", "tags"],
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
    <>
          <div onSubmit={search}>
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
          </div>
      {searchData.map((item) => (
        <React.Fragment key={item.productId}>
          <img
            className='image'
            src={item.image}
            alt=''
            onClick={productDetails}
          />
          <div class='ProductItem__Info'>
            <h2 class='ProductItem__Title '>{item.name}</h2>
            <div class='ProductItem__PriceList  '>
              <span class='ProductItem__Price ' data-money-convertible=''>
                <span class='money'>{item.price}</span>
              </span>
            </div>
          </div>
        </React.Fragment>))}
    </>
  );
};

export default SearchBar;
