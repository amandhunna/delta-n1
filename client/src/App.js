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
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import Address from "./components/User/AccountInfo/UserAddresses/Index";
import PageNotFound from './pages/404';
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
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Route  exact path='/wishlist'>
        <Wishlist />
      </Route>
      <Route  exact path='/contact'>
        <ContactUs />
      </Route>
      <Route  exact path='/productPage'>
        <ProductPage />
      </Route>
      <Route  exact path='/categoryPage'>
        <CategoryPage />
      </Route>
      <Route  exact path='/restorepassword'>
        <Recover />
      </Route>
      <Route  exact path='/register'>
        <AccountRegister />
      </Route>
      <Route  exact path='/account/login'>
        <AccountLogin />
      </Route>
      <Route  exact path='/account/addresses'>
        <Address />
      </Route>
      <Route  exact path='/account'>
        <AccountInfo />
      </Route>
      <Route  exact path='/'></Route>
      <Route  exact path='*'>
          <PageNotFound />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
