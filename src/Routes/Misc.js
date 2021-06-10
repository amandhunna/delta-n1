import { Responsive } from "./../helper/Responsive/Responsive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Final from "./../components/Misc/FinalInfo";
import FinalMobile from "./../components/Misc/FinalInfoMobile";
import HeaderLarge from "./../components/Header/Large/Index";
import Navbar from "./../components/Navbar/Index";
import Header from "./../components/Header/Index";
import ProductDisplay from "./../components/ProductDisplay/Index";
import ProductDisplayMobile from "./../components/ProductDisplay/Mobile/Index";
import Contact from "./../components/Contact/Index";

import SearchPage from "./../pages/SearchPage";

export const FinalInfo = (
  <Route path='/final'>
    {" "}
    <Responsive displayIn={["Laptop"]}>
      <>
        {" "}
        <Final />
      </>
    </Responsive>
    <Responsive displayIn={["Mobile"]}>
      <>
        <FinalMobile />
      </>
    </Responsive>
    <Responsive displayIn={["Tablet"]}>
      <>
        <FinalMobile />
      </>
    </Responsive>
  </Route>
);

export const Contacts = (
  <Route path='/contact'>
    <Responsive displayIn={["Laptop"]}>
      <>
        {" "}
        <HeaderLarge /> <Navbar />{" "}
      </>
    </Responsive>

    <Responsive displayIn={["Mobile"]}>
      <>
        <Header />
      </>
    </Responsive>

    <Responsive displayIn={["Tablet"]}>
      <>
        <Header />
      </>
    </Responsive>
    <Contact />
  </Route>
);

export const Search = (
  <Route path='/search'>
    <Responsive displayIn={["Laptop"]}>
      <>
        <HeaderLarge /> <Navbar />
        <SearchPage />
      </>
    </Responsive>

    <Responsive displayIn={["Mobile"]}>
      <>
        {" "}
        <Header />
        <ProductDisplayMobile />{" "}
      </>
    </Responsive>

    <Responsive displayIn={["Tablet"]}>
      {" "}
      <>
        {" "}
        <Header />
        <ProductDisplayMobile />{" "}
      </>
    </Responsive>
  </Route>
);
