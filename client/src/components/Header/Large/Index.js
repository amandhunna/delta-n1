import React, { useState, useRef, useEffect } from "react";

import {
  HeaderWrapper,
  HeaderTop,
  HeaderBottom,
  HeaderLeft,
  HeaderRight,
  User,
  Search,
  Cart,
} from "./Styles";
import { motion } from "framer-motion";

import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "./../../../context/StateProvider";

import SearchBar from "./../../SearchBar/Index";

const HeaderLarge = () => {
  const node = useRef();

  const [{ user }, dispatch] = useStateValue();

  const [showSearch, setshowSearch] = useState(false);

  const toggle = () => {
    setshowSearch(!showSearch);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, background_color: "red" }}
        transition={{ duration: 2 }}>
        <HeaderWrapper>
          <HeaderTop>
            <HeaderLeft>
              <h1 className='header__Logo'>
                {" "}
                <Link to='/'>
                  <img
                    className='header__Logo__Image'
                    src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
                    alt=''
                  />
                </Link>
              </h1>
            </HeaderLeft>
            <HeaderRight>
              <Link to={!user ? "/account/login" : "/account"}>
                <User style={{ color: "black" }} />
              </Link>
              <Link>
                <Search onClick={toggle} style={{ color: "black" }} />
              </Link>

              <Link to='/cart'>
                <Cart style={{ color: "black" }} />
              </Link>
            </HeaderRight>
          </HeaderTop>
          <HeaderBottom></HeaderBottom>
        </HeaderWrapper>
        {showSearch ? <SearchBar toggle={toggle} /> : null}{" "}
      </motion.div>
    </>
  );
};

export default HeaderLarge;
