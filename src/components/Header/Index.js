import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { MobileIcon } from "./Styles";
import styled from "styled-components";
import { Lock } from "@styled-icons/material";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderMid,
  HeaderRight,
  User,
  HeaderIcons,
  Cart,
  Search,
} from "./Styles";

import { Link } from "react-router-dom";

import { useStateValue } from "./../../context/StateProvider";
import SideDrawer from "./../SideDrawer/Index";
import SearchMobile from "./../SearchBar/SearchMobile";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();

  const [showSearch, setshowSearch] = useState(false);

  const [sideDrawer, setsideDrawer] = useState(false);

  const toggle = () => {
    console.log("search");
    setshowSearch(!showSearch);
  };

  const toggleSiderBar = () => {
    setsideDrawer(!sideDrawer);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderLeft>
          <MenuIcon
            style={{ color: "black" }}
            style={{ fontSize: 30 }}
            onClick={toggleSiderBar}
          />
          {sideDrawer ? <SideDrawer toggleSiderBar={toggleSiderBar} /> : null}
        </HeaderLeft>
        <HeaderMid>
          <Link to='/'>
            {" "}
            <img
              className='header__logo'
              src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
              alt=''
            />{" "}
          </Link>
        </HeaderMid>
        <HeaderRight>
          <Link to={!user ? "/account/login" : "/account"}>
            <User
              onClick={() => window.location.reload()}
              className='icon'
              style={{ color: "black" }}
            />
          </Link>

          <Link>
            <Search onClick={toggle} style={{ color: "black" }} />
          </Link>

          <Link to='/cart'>
            <Cart style={{ color: "black" }} />
          </Link>
        </HeaderRight>
        {showSearch ? <SearchMobile toggle={toggle} /> : null}
      </HeaderWrapper>{" "}
    </>
  );
};

export default Header;
