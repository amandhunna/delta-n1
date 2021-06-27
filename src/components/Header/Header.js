import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './header.css';


import { useHistory } from "react-router-dom";

import { useStateValue } from "./../../context/StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  const history = useHistory();

  const loginPage = () => {
    if (user) {
      history.push("/account");
    } else {
      history.push("/account/login");
    }
  };

  return (
    <header>
        {/* <div className="header-left"></div> */}
        <div className="header-middle">
        <img
          src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
          alt=''
          className='header__logo__image'
          onClick={() => history.push("/")}
        />
        </div>
        <div className="header-right">
            <button className='btn' onClick={loginPage}>
              <PersonIcon style={{ color: "black" }} />{" "}
            </button>
            <button className='btn' onClick={() => history.push("/search")}>
              <SearchIcon style={{ color: "black" }} />{" "}
            </button>
            <button onClick={() => history.push("/cart")} className='btn'>
              <ShoppingCartIcon style={{ color: "black" }} />
            </button>
        </div>
    </header>
  );
};

export default Header;
