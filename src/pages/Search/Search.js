import React, { useState } from "react";
import ProductContainer from './../../components/ProductContainer';
import data from './../../Data/Info';
import { useStateValue } from "./../../context/StateProvider";
import Fuse from "fuse.js";
import './search.css';

function Search({ toggle }) {
  const [ dispatch] = useStateValue();
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
  };



  return (
    <>
    <div className="center" onSubmit={search}>
      <input
        type='search'
        placeholder='Search for a keyword...'
        className='input-search'
        autofocus='true'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          searchItem(e.target.value);
        }}
      />
    </div>
    <div className="search-page">
      {searchData.map(item => (<React.Fragment key={item.productId}>
        <div className="search-product">
          <ProductContainer  product={item}/>
        </div>
      </React.Fragment>))}
    </div>
    </>);
}

export default Search;
