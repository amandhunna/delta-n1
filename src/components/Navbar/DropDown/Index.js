import React from "react";
import { DropDownWrapper } from "./Styles";
import List from "../MegaMenu/ListItem/Index";

const DropDown = () => {
  return (
    <DropDownWrapper>
      <List url={`/men`} Gender={"He"} />
      <List url={`/women`} Gender={"She"} />
    </DropDownWrapper>
  );
};

export default DropDown;
