import styled from "styled-components";

export const MainWrapper = styled.div`
  display: block;
`;

export const Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  display: block;

  @media screen and (min-width: 1240px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 641px) {
    margin-bottom: 40px;
  }
`;
export const PageHeader = styled.div`
  position: relative;
  display: block;

  .link {
    display: inline-block;
    margin-bottom: 25px;
    font-size: 12px;
    color: #939393;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width: 641px) {
      padding-left: 5px;
    }
  }

  .MuiSvgIcon-root {
    height: 9px;
    margin-right: 12px;
    vertical-align: initial;
    overflow: hidden;
    width: 1em;
    fill: currentColor;
    display: inline-block;
    stroke-width: 1px;
    background: none;
    pointer-events: none;
    font-size: 12px;
    color: #939393;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;

    @media screen and (max-width: 641px) {
      padding-left: 25px;
    }
  }

  @media screen and (min-width: 641px) {
    margin: 50px 0;
  }
`;

export const HeaderDetails = styled.div`
  display: block;

  @media screen and (max-width: 641px) {
    padding-left: 25px;
  }

  .headerDetails__heading {
    margin-top: 0 !important;
    font-size: 22px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.65;

    @media screen and (max-width: 641px) {
      margin-bottom: 10px;
      margin-top: 0 !important;
      font-size: 22px;
    }
  }

  @media screen and (min-width: 1008px) {
    margin-bottom: 70px;
  }
`;

export const HeaderButton = styled.button`
  display: block;
  color: white;
  border-color: #ff9999;
  position: relative;
  display: inline-block;
  padding: 14px 28px;
  line-height: normal;
  border: 1px solid transparent;
  border-radius: 0;
  background-color: #ff9999;
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2em;
  font-family: Futura, sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  -webkit-tap-highlight-color: initial;
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  margin: 0;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;

  @media screen and (max-width: 641px) {
    padding-left: 25px;
  }

  @media screen and (min-width: 1008px) {
    margin-top: 30px;
  }
`;

export const AddressDetails = styled.div`
  margin-bottom: -60px;
  display: block;
  list-style: none;
  padding: 0;
  margin: 0 0 0 -24px;
  font-size: 0;

  @media screen and (min-width: 1240px) {
    margin-left: -80px;
  }

  @media screen and (max-width: 641px) {
    padding-left: 25px;
  }
`;

export const UserAddress = styled.div`
  margin-bottom: 60px;
  display: inline-block;
  padding: 0 0 0 24px;
  margin: 0;
  vertical-align: top;
  font-size: 1rem;

  @media screen and (min-width: 1240px) {
    padding-left: 80px;
  }

  @media screen and (min-width: 1008px) {
    width: 33.33333%;
  }
`;

export const Segment = styled.div`
  width: 90vw;

  @media screen and (max-width: 641px) {
    margin-top: 45px;
  }
  .segmentTitle {
    margin-bottom: 34px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e7e7e7;
    color: #939393;
    font-size: 12px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    @media screen and (max-width: 641px) {
    }
  }
`;

export const SegmentContent = styled.div`
  .accountAddress {
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    font-family: Futura, sans-serif;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-style: normal;
    color: #5c5c5c;
  }
`;
