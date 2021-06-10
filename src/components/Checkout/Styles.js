import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  overflow: hidden;
  color: #545454;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  zoom: 1;

  @media (min-width: 1000px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    padding: 0 5%;
    width: 90%;
    max-width: 78.5714285714em;
  }
`;

export const CheckoutLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  border-right: 1px solid #e7e7e7;

  @media (min-width: 1000px) {
    width: 52%;
    padding-right: 6%;
    float: left;
  }

  @media (min-width: 1000px) {
    padding-top: 4em;
  }
`;

export const CheckoutLeft__header = styled.div`
  display: block;
  text-align: center;

  .header__logo {
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    color: #323232;
    cursor: pointer;
    margin-top: 0px;

    @media (min-width: 1000px) {
      display: block;
    }
  }

  @media (min-width: 1000px) {
    padding-bottom: 2em;
  }
`;

export const CheckoutLeft__Content = styled.div`
  flex: 1 0 auto;
`;

export const Checkout__Contact = styled.div`
  position: relative;

  .sectionHeader {
    position: relative;
    display: block;

    @media (min-width: 750px) {
      margin-bottom: 1.5em;
    }
  }

  .heading {
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
    word-wrap: break-word;
    word-break: break-word;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  @media (min-width: 750px) {
    padding-top: 3em;
  }
`;

export const FooterBtn = styled.button`
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

export const Checkout__Contact__Footer = styled.div`
  z-index: 2;
  position: relative;

  @media (min-width: 750px) {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    flex-direction: row-reverse;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 1.5em;
  }
`;

export const CheckoutLeft__Footer = styled.div`
  padding: 1em 0;
  border-top: 1px solid #e6e6e6;
  display: block;

  .link {
    vertical-align: middle;
    color: #202020;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-word;
    -webkit-font-smoothing: subpixel-antialiased;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    line-height: 1.3em;
  }

  .MuiSvgIcon-root {
    transition: all 0.2s cubic-bezier(0.3, 0, 0, 1);
    margin-right: 0.25em;
    color: #323232;
    fill: currentColor;
  }
  .copyrightText {
    font-size: 0.8571428571em;
    color: #737373;
    line-height: 1.5em;
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export const CheckoutRight = styled.div`
  position: relative;
  color: #545454;
  webkit-box-direction: normal;
  flex: 0.9;

  @media (min-width: 1000px) {
    padding-top: 4em;
    width: 38%;
    padding-left: 4%;
    background-position: left top;
    float: right;
  }
`;

export const CheckoutRight__Content = styled.div`
  display: block;
  color: #545454;
`;

export const OrderSummary = styled.div`
  color: #545454;

  @media (min-width: 1000px) {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: calc(100vh - 8em);
    width: 100%;
  }
`;

export const Total = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  border-top: 1px solid rgba(179, 179, 179, 0.34);

  @media (min-width: 1000px) {
    flex: 0 0 auto;
  }
`;
