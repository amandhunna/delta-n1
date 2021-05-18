import React, { useState, useRef, useEffect } from "react";

import { NavbarHorzizontalList, ListItem } from "./Styles.js";

import { Link, useHistory } from "react-router-dom";

import MegaMenu from "./MegaMenu/Index";

import DropDown from "./DropDown/Index";

const Navbar = () => {
  const node = useRef();

  const [megaMenu, setMegaMenu] = useState(false);
  const [showNewArrivals, setshowNewArrivals] = useState(false);
  const [showCollections, setshowCollections] = useState(false);
  const [showBestSellers, setshowBestSellers] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setMegaMenu(false);
    setshowNewArrivals(false);
    setshowCollections(false);
    setshowBestSellers(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const dropdown = () => {
    setMegaMenu(!megaMenu);
    setshowNewArrivals(false);
    setshowCollections(false);
    setshowBestSellers(false);
  };

  const newArrivals = () => {
    setshowNewArrivals(!showNewArrivals);
    setMegaMenu(false);
    setshowCollections(false);
    setshowBestSellers(false);
  };

  const collections = () => {
    setshowCollections(!showCollections);
    setshowBestSellers(false);
    setshowNewArrivals(false);
    setMegaMenu(false);
  };

  const bestsellers = () => {
    setshowBestSellers(!showBestSellers);
    setshowNewArrivals(false);
    setshowCollections(false);
    setMegaMenu(false);
  };

  return (
    <NavbarHorzizontalList ref={node}>
      <ListItem>
        <Link className='navLink'>
          <p className='navLinkText' onClick={dropdown}>
            Shop
          </p>
          <span className='linkSpacer'></span>
          {megaMenu ? (
            <MegaMenu dropdown={dropdown} urlMen={`/men`} urlWomen={"/women"} />
          ) : null}
        </Link>
      </ListItem>
      <ListItem>
        <Link className='navLink'>
          <p className='navLinkText' onClick={newArrivals}>
            New Arrivals
          </p>
          <span className='linkSpacer'></span>
          {showNewArrivals ? (
            <MegaMenu
              newArrivals={newArrivals}
              urlMen={`/new/men`}
              urlWomen={"/new/women"}
            />
          ) : null}
        </Link>
      </ListItem>
      <ListItem>
        <Link className='navLink'>
          <p className='navLinkText' onClick={collections}>
            Collections
          </p>
          <span className='linkSpacer'></span>
          {showCollections ? (
            <MegaMenu
              collections={collections}
              urlMen={`/collections/men`}
              urlWomen={"/collections/women"}
            />
          ) : null}
        </Link>
      </ListItem>
      <ListItem>
        <Link className='navLink'>
          <p className='navLinkText' onClick={bestsellers}>
            BestSellers
          </p>
          <span className='linkSpacer'></span>
          {showBestSellers ? (
            <MegaMenu
              bestsellers={bestsellers}
              urlMen={`/bestsellers/men`}
              urlWomen={"/bestsellers/women"}
            />
          ) : null}
        </Link>
      </ListItem>
    </NavbarHorzizontalList>
  );
};

export default Navbar;
