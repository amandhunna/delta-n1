import React, { useState, useEffect } from "react";
import OrderMobile from "./CheckoutMisc/OrderMobile";
import BreadCrumbsMobile from "./CheckoutMisc/BreadCrumbsMobile";
import { Main, Header, OrderSummary } from "../Checkout/Mobile/Styles";
import { cartTotal } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { db } from "../../config/firebaseConfig";
import {
  ShippinSections,
  ShippinSectionTop,
  Shippin__ContentBox__one,
} from "./FinalInfo";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import PayBtn from "./PayBtn";

const FinalMobile = () => {
  const history = useHistory();

  const [{ cart, user }, dispatch] = useStateValue();

  const [showSummary, setshowSummary] = useState(false);

  const [address, setaddress] = useState([]);

  useEffect(() => {
    let docRef = db.collection("Users").doc(user?.uid);
    console.log(docRef);

    docRef.onSnapshot((snapshot) => setaddress(snapshot.data()));
  }, [address]);

  console.log(address, "address");

  const toggle = () => {
    setshowSummary(!showSummary);
  };

  const mobileStyle = { top: "0vh" };

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

      <BreadCrumbsMobile activeInfo activeShipping />

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
                        {address?.address1} {address?.address2}, {address?.city}
                        -{address?.zip},{address?.state}
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
                    <input class='input-radio' type='radio' checked='checked' />
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
      <Shipping__Footer>
        <PayBtn style={{ top: showSummary ? "110vh" : " 0vh" }} />
      </Shipping__Footer>
    </Main>
  );
};

export default FinalMobile;

export const Ship = styled.div`
  position: relative;
  padding-top: 2em;
  display: block;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;

  .shipping__header {
    position: relative;
    margin-bottom: 1em;
    display: block;
    color: #545454;
  }

  .shipping__title {
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

  .shipping__content {
    zoom: 1;
    display: block;
  }

  .shipping__content-box {
    margin-top: 0;
    background: 0 0;
    background-clip: padding-box;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    color: #545454;
    display: block;
  }

  .shipping__content-box__row {
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
    color: #545454;
  }

  .radio-wrapper {
    margin-bottom: 0;
    box-sizing: border-box;
    width: 100%;
    display: table;
    zoom: 1;
    color: #545454;
  }

  .radio__input {
    display: table-cell;
    padding-right: 0.75em;
    white-space: nowrap;
    color: #545454;
  }

  .radio__label {
    display: table-cell;
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
  }

  .radio__label__primary {
    display: table-cell;
    width: 100%;
    cursor: inherit;
    font-family: inherit;
    vertical-align: top;
  }
`;

const Shipping__Footer = styled.div`
  z-index: 2;
  margin-top: 34rem;
  margin-left: 5rem;
  position: absolute;
`;

const FooterButton = styled.button`
  color: white;
  border-color: #ff9999;
  background-color: #ff9999;
  position: relative;

  display: inline-block;
  padding: 14px 28px;
  line-height: normal;
  border: 1px solid transparent;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2em;
  font-family: Futura, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 4.5rem;

  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  -webkit-tap-highlight-color: initial;
  text-decoration: none;
  cursor: pointer;
`;
