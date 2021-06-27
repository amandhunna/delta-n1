import { Responsive } from "./../helper/Responsive/Responsive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./../components/Navbar/Index";
import AccountLogin from "./../pages/AccountLogin";
import Header from "./../components/Header";
import Address from "./../components/User/AccountInfo/UserAddresses/Index";
import AccountInfo from "./../components/User/AccountInfo/AccountInfo";
import Recover from "./../components/User/RecoverPassword/Index";
import AccountRegister from "./../pages/AccountRegister";

// components

export const Login = (
  <Route path='/login'>
    <Responsive displayIn={["Laptop"]}>
      <>
        {" "}
        <Header /> <Navbar />{" "}
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
    <AccountLogin />
  </Route>
);

export const UserAddresses = (
  <Route path='/account/addresses'>
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
    <Address />
  </Route>
);

export const UserAccount = (
  <Route path='/account'>
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
    <AccountInfo />
  </Route>
);

export const RestorePassword = (
  <Route path='/restorepassword'>
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
    <Recover />
  </Route>
);

export const Register = (
  <Route path='/register'>
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
    <AccountRegister />
  </Route>
);
