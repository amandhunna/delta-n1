import styled from "styled-components";

export const MainWrapper = styled.div`
  display: block;
`;

export const Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 24px;
  display: block;
  @media screen and (min-width: 1240px) {
    padding: 0 80px;
  }
`;

export const PageHeader = styled.div`
  position: relative;
  display: block;
  margin: 35px 0;

  .logOut {
    display: inline-block;
    margin-bottom: -5px;
    color: #939393;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background-color: transparent;
    text-decoration: none;
    line-height: 1.65;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (min-width: 641px) {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 641px) {
    margin: 50px 0;
  }
`;

export const PageHeaderSection = styled.div`
  margin-bottom: 60px;
  margin-top: 0 !important;

  .section__Heading {
    margin-top: 0 !important;
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
    display: block;

    @media screen and (min-width: 641px) {
      font-size: 22px;
    }

    @media screen and (max-width: 641px) {
      font-size: 22px;
      margin-bottom: 40px;

      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }

  .section__Description {
    margin-top: 0 !important;
    max-width: 5000px;
    font-size: inherit;
    font-weight: inherit;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.65;
    font-style: normal;
    color: #5c5c5c;
    font-family: "Century Gothic", sans-serif;
  }

  @media screen and (min-width: 1008px) {
    margin-bottom: 70px;
    display: block;
  }
`;

export const SectionDetails = styled.div`
  @media screen and (min-width: 641px) {
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
  }
`;

export const SectionOne = styled.div`
  margin-top: 15px;
  font-size: 13px;

  @media screen and (min-width: 641px) {
    margin-bottom: 0;
    flex: 1 0 0;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
  }
`;

export const SectionOneDetails = styled.div`
  .sectionDetails__orders {
    margin-bottom: 24px;
    margin-top: 150px;
    font-size: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e7e7e7;
    color: #939393;
    padding-bottom: 10px;
    border-bottom: 1px solid #e7e7e7;
    color: #939393;
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
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;

    @media screen and (min-width: 641px) {
      margin-bottom: 34px;
      font-size: 18px;
    }

    @media screen and (max-width: 641px) {
      margin-bottom: 34px;
      font-size: 12px;
    }
  }
`;

export const SectionOneDetailsContent = styled.div`
  margin-bottom: 50px;

  .order__details {
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-style: normal;
    color: #5c5c5c;
    font-family: "Century Gothic", sans-serif;
    line-height: 1.65;

    @media screen and (min-width: 641px) {
      margin-bottom: 34px;
      font-size: 15px;
    }

    @media screen and (max-width: 641px) {
      margin-bottom: 34px;
      font-size: 12px;
    }
  }

  .sectionDetails__orders {
    margin-top: 150px;
    margin-bottom: 150px;
  }
`;

export const SectionTwo = styled.div`
  margin-top: 15px;
  font-size: 13px;
  @media screen and (min-width: 1240px) {
    margin-left: 80px;
    flex-basis: 290px;
    max-width: 290px;
    flex: 1 1 200px;
  }
`;

export const SectionDetailsContentButton = styled.div`
  margin-top: 32px;
`;

export const AddressButton = styled.button`
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

  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  -webkit-tap-highlight-color: initial;
  text-decoration: none;
  cursor: pointer;
`;
/*  @media screen and (max-width: 641px) */
