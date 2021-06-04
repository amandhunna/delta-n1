import React, { useState, useRef, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import {
  Header,
  Header__Wrapper,
  Header__left,
  Header__Mid,
  Header__Right,
  User,
  Search,
  Cart,
} from "./Styles";

import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "./../../../context/StateProvider";

import SearchBar from "./../../SearchBar/Index";

import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const HeaderLarge = () => {
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();

  const [showSearch, setshowSearch] = useState(false);

  const toggle = () => {
    console.log("search");
    setshowSearch(!showSearch);
  };

  const loginPage = () => {
    if (user) {
      history.push("/account");
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <Header>
        <Header__Wrapper>
          <Header__left></Header__left>
          <Header__Mid>
            <h1 className='header__logo'>
              <img
                src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
                alt=''
                className='header__logo__image'
                onClick={() => history.push("/")}
              />
            </h1>
          </Header__Mid>
          <Header__Right>
            {" "}
            <button className='btn' onClick={loginPage}>
              {" "}
              <User style={{ color: "black" }} />{" "}
            </button>
            <button className='btn' onClick={() => setshowSearch(!showSearch)}>
              {" "}
              <Search style={{ color: "black" }} />{" "}
            </button>
            <button onClick={() => history.push("/cart")} className='btn'>
              {" "}
              <Cart style={{ color: "black" }} />
            </button>
          </Header__Right>
        </Header__Wrapper>
      </Header>{" "}
      {showSearch ? <SearchBar toggle={toggle} /> : null}
    </>
  );
};

export default HeaderLarge;
