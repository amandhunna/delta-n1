import React, { useEffect } from "react";
import { Responsive } from "./helper/Responsive";
import { auth } from "./config/firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import "./App.css";

//components
import HeaderLarge from "./components/Header/Large/Index";
import Navbar from "./components/Navbar/Index";
import Header from "./components/Header/Index";
import AccountInfo from "./components/User/AccountInfo/AccountInfo";
import ContactUs from "./pages/ContactUs";
import Recover from "./components/User/RecoverPassword/Index";
import AccountRegister from "./pages/AccountRegister";
import AccountLogin from "./pages/AccountLogin";
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Address from "./components/User/AccountInfo/UserAddresses/Index";
import "./App.css";

// const { REACT_APP_TEST_COMPONENTS, REACT_APP_REACT_ENV } = process.env;
// MAIN APP {REACT_APP_REACT_ENV} {REACT_APP_TEST_COMPONENTS}
function App() {
  const [{ user }, dispatch] = useStateValue() || [{}];

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

  useEffect(() => {}, []);
  console.log(user, "user");
  console.log(user?.uid, "uid");
  return (
    <Router>
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

    <Switch>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/wishlist'>
        <Wishlist />
      </Route>
      <Route path='/contact'>
        <ContactUs />
      </Route>
      <Route path='/restorepassword'>
        <Recover />
      </Route>
      <Route path='/register'>
        <AccountRegister />
      </Route>
      <Route path='/account/login'>
        <AccountLogin />
      </Route>
      <Route path='/account/addresses'>
        <Address />
      </Route>
      <Route path='/account'>
        <AccountInfo />
      </Route>
      <Route path='/'></Route>
    </Switch>
  </Router>
  );
}

export default App;
