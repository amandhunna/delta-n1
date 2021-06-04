import React, { useEffect, useState } from "react";
import { auth } from "./config/firebaseConfig";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search, Contacts, FinalInfo } from "./Routes/Misc";

import {
  Home,
  NewArrivalsMenTop,
  NewArrivalsMenBottoms,
  NewArrivalsMenMobile,
  NewArrivalsWomenBottom,
  NewArrivalsWomenTop,
  NewArrivalsWomenMobile,
  CollectionMenTop,
  CollectionMenBottom,
  CollectionsMenMobile,
  CollectionsWomanTops,
  CollectionsWomanBottoms,
  CollectionWomanMobile,
  BestSellersMenTops,
  BestSellersMenBottoms,
  BestSellersMenMobile,
  BestSellersWomenTops,
  BestSellersWomanBottoms,
  BestSellersWomanMobile,
} from "./routes";

import {
  RestorePassword,
  UserAddresses,
  Register,
  Login,
  UserAccount,
} from "./Routes/User";
// App Context
import { useStateValue } from "./context/StateProvider";

function TestComponent() {
  const { REACT_APP_TEST_COMPONENTS, REACT_APP_REACT_ENV } = process.env;

  const [{ user, term, product, results }, dispatch] = useStateValue();

  // to keep track of user
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // add user to data layer on loggin in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // remove user from data layer on logging out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log(results);

  return (
    <Router>
      <Switch>
        {/* NewArrivals - Men*/}
        {NewArrivalsMenTop}
        {NewArrivalsMenBottoms}
        {NewArrivalsMenMobile}

        {/* NewArrivals  Women */}
        {NewArrivalsWomenBottom}
        {NewArrivalsWomenTop}
        {NewArrivalsWomenMobile}

        {/* Collection - Men */}
        {CollectionMenTop}
        {CollectionMenBottom}
        {CollectionsMenMobile}

        {/* Collection - WoMen  */}
        {CollectionsWomanTops}
        {CollectionsWomanBottoms}
        {CollectionWomanMobile}

        {/* Bestsellers - men */}
        {BestSellersMenTops}
        {BestSellersMenBottoms}
        {BestSellersMenMobile}

        {/* Bestsellers - women */}
        {BestSellersWomenTops}
        {BestSellersWomanBottoms}
        {BestSellersWomanMobile}

        {/* Misc */}
        {Search}
        {Contacts}
        {FinalInfo}
        {/* User */}
        {RestorePassword}
        {Register}
        {Login}
        {UserAddresses}
        {UserAccount}
        {/* Main */}
        {Home}
      </Switch>
    </Router>
  );
}

export default TestComponent;
