import React, { useState, useEffect } from "react";
import { Main, Header, OrderSummary } from "./Styles";
import OrderMobile from "./../../Misc/CheckoutMisc/OrderMobile";
import { cartTotal } from "../../../context/reducer";
import { useStateValue } from "../../../context/StateProvider";
import {
  CheckoutLeft__Content,
  Checkout__Contact,
  FooterBtn,
  Checkout__Contact__Footer,
} from "../Styles";
import {
  FormItem,
  Form,
  ItemLabel,
} from "./../../User/AccountInfo/UserAddresses/PopupStyles";
import { useHistory } from "react-router-dom";

import { db } from "../../../config/firebaseConfig";
import BreadCrumbsMobile from "./../../Misc/CheckoutMisc/BreadCrumbsMobile";

const CheckoutMobile = () => {
  const history = useHistory();

  const [{ cart, user }, dispatch] = useStateValue();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [phone, setphone] = useState("");
  const [zip, setzip] = useState("");
  const [city, setcity] = useState("");
  const [userState, setuserState] = useState("");

  useEffect(() => {
    let docRef = db.collection("Users").doc(user?.uid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const details = doc.data();
          console.log(details);
          setfirstName(details.firstName);
          setlastName(details.lastName);
          setzip(details.zip);
          setcity(details.city);
          setaddress2(details.address2);
          setaddress1(details.address1);
          setuserState(details.state);
        } else {
          console.log("error fetching");
        }
      })
      .catch((e) => alert(e));
  }, []);

  const [showSummary, setshowSummary] = useState(false);

  const toggle = () => {
    setshowSummary(!showSummary);
  };

  return (
    <Main>
      <Header>
        <div className='header'>
          <a className='logoLink' href='https://www.amrapaliboutique.in/'>
            <img
              alt='Amrapali Boutique'
              className='logo__image'
              src='//cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_ba865139-6dda-45c1-9273-a573a917ecb7.png?2770'
            />
          </a>
        </div>
      </Header>
      <OrderSummary onClick={toggle}>
        <span className='btn__left'>
          <span className='details'> order summary</span> {""}
          <svg
            width='11'
            height='6'
            xmlns='http://www.w3.org/2000/svg'
            class='order-summary-toggle__dropdown'
            fill='#000'>
            <path d='M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z'></path>
          </svg>
        </span>

        <span className='amount'> ₹{cartTotal(cart)}</span>
      </OrderSummary>

      {showSummary ? <OrderMobile /> : null}

      <BreadCrumbsMobile activeCart activeInfo />

      <CheckoutLeft__Content>
        <Checkout__Contact>
          <div className='sectionHeader'>
            <h2 className='heading'>Shipping Address</h2>
          </div>
          <Form>
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='First name'
                onChange={(e) => setfirstName(e.target.value)}
                autofocus
                required
              />
              <ItemLabel>First name</ItemLabel>
            </FormItem>{" "}
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='Last name'
                onChange={(e) => setlastName(e.target.value)}
                required
              />
              <ItemLabel>Last name</ItemLabel>
            </FormItem>
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='Phone'
                onChange={(e) => setphone(e.target.value)}
                required
              />
              <ItemLabel>Phone</ItemLabel>
            </FormItem>
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='Address 1'
                onChange={(e) => setaddress1(e.target.value)}
                required
              />
              <ItemLabel>Address 1</ItemLabel>
            </FormItem>
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='Address 2'
                onChange={(e) => setaddress2(e.target.value)}
              />
              <ItemLabel>Address 2</ItemLabel>
            </FormItem>
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='City'
                onChange={(e) => setcity(e.target.value)}
                required
              />
              <ItemLabel>City</ItemLabel>
            </FormItem>
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='Zip'
                onChange={(e) => setzip(e.target.value)}
                required
              />
              <ItemLabel>Zip</ItemLabel>
            </FormItem>
            <FormItem>
              <input
                type='text'
                className='formInput'
                placeholder='State'
                onChange={(e) => setuserState(e.target.value)}
                required
              />
              <ItemLabel>State</ItemLabel>
            </FormItem>
          </Form>
        </Checkout__Contact>

        <Checkout__Contact__Footer>
          <FooterBtn onClick={() => history.push("/shipping")}>
            Continue to Shipping
          </FooterBtn>
        </Checkout__Contact__Footer>
      </CheckoutLeft__Content>
    </Main>
  );
};

export default CheckoutMobile;
