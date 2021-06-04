import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./../../context/StateProvider";
import { data } from "./../../Data/Info";
import Fuse from "fuse.js";

const SearchBar = ({ showSearch, toggle }) => {
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
      keys: ["Title"],
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
              placeholder='Search...'
              className='input'
              autofocus='true'
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                searchItem(e.target.value);
              }}
            />
            <SearchIcons>
              <SearchIcon />
            </SearchIcons>
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

export const Search = styled.div`
  display: block;
  margin-top: 70px;
  position: absolute;
  background: white;
  z-index: 100;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
`;

export const Search__Inner = styled.div`
  max-height: calc(100vh - 61px - 88px);
  padding: 14px 18px;
  overflow: auto;
  display: block;
`;

export const Search__SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Search__Form = styled.form`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  pointer-events: auto;
  margin-top: 0em;

  .input {
    margin-left: 25px;
    border: none;
    border-style: none;
    outline: none;
    background: none;
    width: 100%;
    font-family: "Century Gothic", sans-serif;
    font-style: normal;
    color: #5c5c5c;
    background: white;
    line-height: 1.65;
    vertical-align: middle;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    line-height: normal;
    border-radius: 0;
    margin: 0;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    cursor: text;
    .&:focus {
      outline: none;
    }
  }
`;

export const SearchIcons = styled.div`
  cursor: pointer;
  margin-right: 20px;
  margin-left: 25px;
`;

export const Search_Results = styled.div`
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Search_Results_Layout = styled.div`
  margin-bottom: 60px;
  display: flex;
`;

export const Search_Results_Segments = styled.div`
  display: flex;
  justify-content: center;

  .image {
    height: 10rem;
  }

  .ProductItem__Info {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
  }

  .ProductItem__Title {
    margin-top: 20%;
    font-size: 15px;
    font-style: normal;
    color: #5c5c5c;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
  }
`;
