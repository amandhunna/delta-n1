import React, { useState } from "react";
import { Options, MenuButton } from "./Styles";
import AddIcon from "@material-ui/icons/Add";

import MenuList from "./../MenuList/Index";

const SideDrawerOptions = ({ name, urlMen, urlWomen, toggleSiderBar }) => {
  const [showList, setshowList] = useState(false);

  const openList = () => {
    setshowList(!showList);
  };

  return (
    <Options>
      <MenuButton onClick={openList}>
        {name}
        <span>
          <AddIcon style={{ fontSize: 80 }} />
        </span>
      </MenuButton>
      {showList ? (
        <MenuList
          urlMen={urlMen}
          urlWomen={urlWomen}
          toggleSiderBar={toggleSiderBar}
        />
      ) : null}
    </Options>
  );
};

export default SideDrawerOptions;
