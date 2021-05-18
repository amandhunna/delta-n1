import React from "react";

import { MegaMenuWrapper, MegaMenuInner, ListTypeTwo } from "./Styles";

import List from "./ListItem/Index";

import PushMenu from "./PushMenu/Index";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { imagesMen, imagesWomen } from "./../../../helper/NavbarImages";

const MegaMenu = ({ dropdown, urlMen, urlWomen }) => {
  const men = imagesMen[Math.floor(Math.random() * imagesMen.length)];
  const women = imagesWomen[Math.floor(Math.random() * imagesWomen.length)];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      <MegaMenuWrapper onClick={dropdown}>
        <MegaMenuInner>
          <List url={urlMen} Gender={"He"} />
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
    </motion.div>
  );
};

export default MegaMenu;
