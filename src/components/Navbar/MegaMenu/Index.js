import React from "react";

import { MegaMenuWrapper, MegaMenuInner, ListTypeTwo } from "./Styles";

import List from "./ListItem/Index";

import PushMenu from "./PushMenu/Index";

import { Link } from "react-router-dom";

import { imagesMen, imagesWomen } from "./../../../helper/NavbarImages";

const MegaMenu = ({
  dropdown,
  urlMen,
  urlWomen,
  detailOne,
  detailTwo,
  detailThree,
}) => {
  const men = imagesMen[Math.floor(Math.random() * imagesMen.length)];
  const women = imagesWomen[Math.floor(Math.random() * imagesWomen.length)];

  return (
    <>
      <MegaMenuWrapper onClick={dropdown}>
        <MegaMenuInner>
          <List url={urlMen} Gender={"He"} detailOne detailTwo detailThree />
          <List url={urlWomen} Gender={"She"} />
          <ListTypeTwo>
            <Link to='/misc' className='link'>
              Miscellaneous
            </Link>
          </ListTypeTwo>
          <PushMenu imageUrl={men} Gender={"He"} url={"/men"} />
          <PushMenu imageUrl={women} Gender={"She"} url={"/women"} />
        </MegaMenuInner>
      </MegaMenuWrapper>
    </>
  );
};

export default MegaMenu;
