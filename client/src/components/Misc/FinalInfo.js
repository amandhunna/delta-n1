import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
} from "../Checkout/Styles";

import Breadcrumbs from "./Breadcrumbs";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { cartTotal } from "../../context/reducer";
import { db } from "../../config/firebaseConfig";
import CheckoutTable from "./CheckoutMisc/CheckoutTable";
import Order from "./CheckoutMisc/Order";
import { Ship } from "./FinalInfoMobile";
import PayBtn from "./PayBtn";

const Final = () => {
  const history = useHistory();

  const [{ user, cart }] = useStateValue();

  const [address, setaddress] = useState([]);

  useEffect(() => {
    let docRef = db.collection("Users").doc(user?.uid);
    console.log(docRef);

    docRef.onSnapshot((snapshot) => setaddress(snapshot.data()));
  }, [address]);

  console.log(address, "address");

  return (
    <Main>
      <CheckoutContainer>
        <CheckoutLeft>
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
            <Breadcrumbs activeShipping activeCart />
          </CheckoutLeft__header>

          <ShippinSections>
            <ShippinSectionTop>
              <Shippin__ContentBox__one>
                {" "}
                <div role='table' className='table'>
                  <div role='row' className='review-block'>
                    <div className='review-block__inner'>
                      <div role='rowheader' className='review-block__label'>
                        Contact
                      </div>
                      <div role='cell' className='review-block__content'>
                        <bdo dir='ltr'>{user?.email}</bdo>
                      </div>
                    </div>
                    <div role='cell' className='review-block__link'>
                      <a
                        className='link--small'
                        href='/8250916915/checkouts/729e11d7d75d7d065b19617cfc95e7d6?step=contact_information'>
                        <span aria-hidden='true'>Change</span>
                      </a>{" "}
                    </div>
                  </div>

                  <div role='row' className='review-blockTwo'>
                    <div className='review-block__inner'>
                      <div role='rowheader' className='review-block__label'>
                        Ship to
                      </div>
                      <div role='cell' className='review-block__content'>
                        <address className='address address--tight'>
                          <address>
                            {" "}
                            {address?.address1} {address?.address2},{" "}
                            {address?.city}-{address?.zip},{address?.state}
                          </address>
                        </address>
                      </div>
                    </div>
                    <div role='cell' className='review-block__link'>
                      <a
                        className='link--small'
                        href='/8250916915/checkouts/729e11d7d75d7d065b19617cfc95e7d6?step=contact_information'></a>{" "}
                    </div>
                  </div>
                </div>
              </Shippin__ContentBox__one>
            </ShippinSectionTop>

            <Ship>
              <div className='shipping__header'>
                <h2 className='shipping__title'>Shipping method</h2>
              </div>

              <div className='shipping__content'>
                <div className='shipping__content-box'>
                  <div className='shipping__content-box__row'>
                    <div className='radio-wrapper'>
                      <div class='radio__input'>
                        <input
                          class='input-radio'
                          type='radio'
                          checked='checked'
                        />
                      </div>
                      <label className='radio__label'>
                        <span className='radio__label__primary'>
                          Shipping charges included
                        </span>
                        <span className='radio__label__accessory'>
                          <span className='content-box__emphasis'>Free</span>
                        </span>
                      </label>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Ship>
          </ShippinSections>

          <Checkout__Contact__Footer>
            <PayBtn>{`Pay ₹${cartTotal(cart)}`}</PayBtn>
          </Checkout__Contact__Footer>

          <CheckoutLeft__Footer>
            <p className='copyrightText'>All rights reserved. Little Tags</p>
          </CheckoutLeft__Footer>
        </CheckoutLeft>

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

export default Final;

export const ShippinSections = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 290px;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  -webkit-font-smoothing: subpixel-antialiased;

  .section section--shipping-method {
    position: relative;
    width: 100%;

    @media (min-width: 750px) {
      padding-top: 3em;
    }
  }

  .section__header {
    position: relative;
    margin-top: 100px;
    margin-bottom: 1.5em;
  }

  .section__title {
    margin: 25px;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    font-size: 1.2857142857em;
    line-height: 1.3em;
    font-weight: 400;
    margin: 0;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
  }

  .section__content {
    zoom: 1;
    display: flex;
    content: "";
    display: table;
    color: #545454;
  }

  .content-box {
    margin-top: 0;
    border-color: #d9d9d9;
    background: 0 0;
    width: 30vw;
    background-clip: padding-box;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    color: #545454;
    display: block;
  }

  .content-box__row {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    display: table;
    padding: 1.1428571429em;
    position: relative;
    zoom: 1;
    content: "";
    display: table;
    color: #545454;
  }

  .radio-wrapper {
    margin-bottom: 0;
    box-sizing: border-box;
    width: 100%;
    display: table;
    color: #545454;
  }

  .radio__label {
    display: flex;
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
  }

  .input-radio {
    border-color: #323232;
    border-width: 7px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    transition: all 0.2s ease-in-out;
    position: relative;
    cursor: pointer;
    vertical-align: -4px;
    border: 1px solid;
    color: inherit;
    font: inherit;
    margin: 0;
    background: 0 0;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin-right:
    line-height: normal;
  }

  .radio__label__primary {
    display: table-cell;
    width: 100%;
    width: 24vw;
    cursor: inherit;
    font-family: inherit;
    vertical-align: top;
  }

  .radio__label__accessory {
    display: table-cell;
    text-align: right;
    padding-left: 0.75em;
    white-space: nowrap;
    cursor: pointer;
  }

  .content-box__emphasis {
    text-align: right;
    padding-left: 0.75em;
    display: table-cell;
    white-space: nowrap;
  }
`;

export const ShippinSectionTop = styled.div`
  padding-top: 0;
  position: relative;
  display: block;
`;

export const Shippin__ContentBox__one = styled.div`
  margin-top: 0;
  border-color: #d9d9d9;
  background: 0 0;
  background-clip: padding-box;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  color: #545454;
  display: block;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;

  .table {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    display: table;
    padding-top: 0.8571428571em;
    padding-bottom: 0.8571428571em;
    padding: 1.1428571429em;
    position: relative;
    zoom: 1;
    color: #545454;
  }

  .review-block {
    display: flex;
    color: #545454;
  }

  .review-block__inner {
    display: flex;
    -webkit-box-flex: 1;
    flex: 1;
  }

  .review-block__label {
    color: #737373;
    padding-right: 1.1428571429em;
    -webkit-box-flex: 0;
    flex: 0 1 5em;
    display: block;
  }

  .review-block__content {
    -webkit-box-flex: 5;
    flex: 5;
    color: #333;
    padding-right: 1.1428571429em;
    display: block;
  }

  .review-block__link {
    max-width: 10em;
    font-size: 0.8571428571em;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    line-height: 1.3em;
    color: #545454;
    text-decoration: none;
  }

  .link--small {
    text-decoration: none;
    color: #323232;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    font-size: 0.8571428571em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    line-height: 1.3em;
    word-wrap: break-word;
    word-break: break-word;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .review-block {
    margin-top: 0.8571428571em;
    padding-top: 0.8571428571em;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 0.8571428571em;
    display: flex;
  }

  .review-blockTwo {
    margin-top: 0.8571428571em;
    padding-top: 0.8571428571em;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    line-height: 1.3em;
    word-wrap: break-word;
    word-break: break-word;
  }
  .review-block__inner {
    display: flex;
    flex: 1;
    color: #545454;
  }

  .review-block__label {
    color: #737373;
    padding-right: 1.1428571429em;
    -webkit-box-flex: 0;
    flex: 0 1 5em;
  }

  .review-block__content {
    flex: 5;
    color: #333;
    padding-right: 1.1428571429em;
  }

  .address address--tight {
    line-height: inherit;
    font-style: normal;
    display: block;
    color: #333;
  }
`;
