import React, { useEffect } from "react";
import { auth } from "./config/firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";

//components
import Header from "./components/Header";
import Footer from './components/Footer';
import routeComponents from './route'; 
import "./App.css";



function App() {
  const [{ user, banner }, dispatch] = useStateValue() || [{}];

  // to keep track of user
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const userCredential = {
          id: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
          accessToken: authUser.accessToken || localStorage.getItem('accessToken'),
          idToken: authUser.idToken  || localStorage.getItem('idToken'),
          photoURL: authUser.photoURL
        };
        dispatch({
          type: "SET_USER",
          user: userCredential,
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


  function onBannerCancel () {
    dispatch({
      type: "SET_BANNER",
      banner: {show: false, message: null},
    })
  }

  
  return (
    <Router>
            <Header /> {/* <Navbar /> */}

{/*         <Responsive displayIn={["Mobile"]}>
            <Header />
        </Responsive>

        <Responsive displayIn={["Tablet"]}>
            <Header />
        </Responsive>
 */} 
        <Switch>
          {routeComponents.map(item => {
            const Component = item.component;
            const { route:path } = item;
            return <Route exact path={path}  key={path}  render={route => <main><Component route={route} /></main>} />
            })
          }
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
