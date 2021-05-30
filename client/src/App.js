import React, { useEffect } from "react";
import { Responsive } from "./helper/Responsive";
import { auth } from "./config/firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";

//components
import HeaderLarge from "./components/Header/Large/Index";
import Navbar from "./components/Navbar/Index";
import Header from "./components/Header/Index";
import Footer from './components/Footer';
import routeComponents from './route'; 
import "./App.css";



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

  // console.log(user, "user");
  // console.log(user?.uid, "uid");
  
  return (
    <Router>
        <Responsive displayIn={["Laptop"]}>
            <HeaderLarge /> <Navbar />{" "}
        </Responsive>

        <Responsive displayIn={["Mobile"]}>
            <Header />
        </Responsive>

        <Responsive displayIn={["Tablet"]}>
            <Header />
        </Responsive>
        <div className="center banner">
          <div>
            <span>You need to <a className = 'loginWarning 'href='/account/login'>Login</a> to perform this action</span>
          </div>
          <button className="">x</button>
        </div>
        <Switch>
          {routeComponents.map(item => {
            const Component = item.component;
            const { route:path } = item;
            return <Route exact path={path}  key={path}  render={route => <Component route={route} />} />
            })
          }
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
