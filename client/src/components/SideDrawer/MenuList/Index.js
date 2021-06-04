import React from "react";
import {
  Collapsible__Inner,
  Collapsible__Content,
  Collapsible,
  Collapsible__Button,
  Collapsible__InnerTwo,
} from "./Styles";

import { useHistory } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";

const MenuList = ({ urlMen, urlWomen, toggleSiderBar }) => {
  const history = useHistory();

  const redirectToMen = () => {
    history.push(urlMen);
    toggleSiderBar();
  };

  const redirectToWomen = () => {
    history.push(urlWomen);
    toggleSiderBar();
  };

  return (
    <Collapsible__Inner>
      <Collapsible__Content>
        <Collapsible>
          <Collapsible__Button onClick={redirectToMen}>
            Men
            <span>
              <AddIcon style={{ fontSize: 15 }} />
            </span>
          </Collapsible__Button>
          <Collapsible__InnerTwo></Collapsible__InnerTwo>
        </Collapsible>
      </Collapsible__Content>
      <Collapsible__Content>
        <Collapsible>
          <Collapsible__Button onClick={redirectToWomen}>
            Women
            <span>
              <AddIcon style={{ fontSize: 15 }} />
            </span>
          </Collapsible__Button>
          <Collapsible__InnerTwo></Collapsible__InnerTwo>
        </Collapsible>
      </Collapsible__Content>
    </Collapsible__Inner>
  );
};

export default MenuList;
