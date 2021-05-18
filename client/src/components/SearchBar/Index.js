import React, { useRef, useEffect } from "react";

import {
  SearchBarWrapper,
  SearchInner,
  SearchForm,
  Search_SearchBar,
  SearchIcons,
  Input,
} from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const SearchBar = ({ showSearch, toggle }) => {
  const node = useRef();
  let history = useHistory();

  const searchPage = (e) => {
    e.preventDefault();
    history.location("/new");
  };

  return (
    <SearchBarWrapper showSearch={showSearch}>
      <SearchInner>
        <Search_SearchBar>
          <SearchForm>
            <SearchIcons>
              <SearchIcon fontSize='large' />
            </SearchIcons>
            <input
              type='search'
              placeholder='Search...'
              className='input'
              autofocus
              onSubmit={searchPage}
            />
          </SearchForm>
        </Search_SearchBar>
      </SearchInner>
    </SearchBarWrapper>
  );
};

export default SearchBar;
