import styled from "styled-components";

export const Main = styled.div`
  overflow: visible;
  height: auto;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  color: #545454;
  background: #fff;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  flex: 1 0 auto;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  margin: 0;
  width: 100%;
`;

export const Header = styled.div`
  flex-shrink: 0;
  padding: 1.5em 0;
  background: 0 0;
  background-size: cover;
  @media (max-width: 999px) {
    display: block;
  }
  .header {
    display: block;
    margin: 0 auto;
    max-width: 40em;
    zoom: 1;
    @media (max-width: 999px) {
      width: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 1em;
    }
  }
  .logoLink {
    text-align: center;
    display: block;
    vertical-align: middle;
    text-decoration: none;
    color: #323232;
    cursor: pointer;
  }
  .logo__image {
    max-height: 2.1428571429em;
    display: inline-block;
    border: 0;
    max-width: 100%;
    text-align: center;
    cursor: pointer;
  }
`;

export const OrderSummary = styled.button`
  background: #fafafa;
  display: flex;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding: 1.25em 0;
  flex-shrink: 0;
  text-align: left;
  width: 100%;
  appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  color: inherit;
  font: inherit;
  margin: 0;
  line-height: normal;
  border: none;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-rendering: auto;
  align-items: flex-start;
  box-sizing: border-box;

  .btn__left {
    flex: 0.3;
    margin-right: 12rem;
    color: #323232;
    text-align: left;
    cursor: pointer;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
  }
  .order-summary-toggle__dropdown {
    vertical-align: middle;
    fill: #323232;
    width: 11;
    height: 6;
    color: #323232;
    text-align: left;
    cursor: pointer;
  }
  .amount {
    flex: 0.3;
    font-size: 1.2857142857em;
    line-height: 1em;
    color: #333;
    font-weight: 500;
    text-align: right;
    white-space: nowrap;
    text-indent: 0px;
    text-shadow: none;
  }
`;
