import React, { useState, useEffect } from "react";
import {
  Main,
  CheckoutContainer,
  CheckoutLeft,
  CheckoutLeft__header,
  CheckoutRight,
  CheckoutLeft__Content,
  CheckoutLeft__Footer,
  Checkout__Contact,
  Checkout__Contact__Footer,
  CheckoutRight__Content,
  OrderSummary,
  FooterBtn,
  Total,
} from "./Styles";
import { Link, useHistory } from "react-router-dom";
import Breadcrumbs from "./../Misc/Breadcrumbs";

import { useStateValue } from "./../../context/StateProvider";
import { db } from "./../../config/firebaseConfig";

import {
  FormItem,
  Form,
  ItemLabel,
} from "./../User/AccountInfo/UserAddresses/PopupStyles";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import CheckoutTable from "./../Misc/CheckoutMisc/CheckoutTable";
import Order from "./../Misc/CheckoutMisc/Order";

const Checkout = () => {
  const history = useHistory();

  const [{ user }, dispatch] = useStateValue();

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

  return (
    <Main>
      <CheckoutContainer>
        {/* CheckoutLeft */}

        <CheckoutLeft>
          {/* Header */}

          <CheckoutLeft__header>
            <Link to='/'>
              {" "}
              <h1 className='header__logo'>
                <img
                  src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
                  alt=''
                />{" "}
              </h1>
            </Link>
            <Breadcrumbs activeCart />
          </CheckoutLeft__header>

          {/* Content */}

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

          {/* Footer */}

          <CheckoutLeft__Footer>
            <p className='copyrightText'>All rights reserved. Little Tags</p>
          </CheckoutLeft__Footer>
        </CheckoutLeft>

        {/* Checkout Right */}

        <CheckoutRight>
          <CheckoutRight__Content>
            <OrderSummary>
              <Order />
              <Total>
                <CheckoutTable />
              </Total>
            </OrderSummary>
          </CheckoutRight__Content>
        </CheckoutRight>
      </CheckoutContainer>
    </Main>
  );
};

export default Checkout;
