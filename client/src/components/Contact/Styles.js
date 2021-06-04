import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: block;
`;

export const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;

  @media screen and (min-width: 1240px) {
    padding: 0 80px;
  }
`;

export const ContactHeader = styled.div`
  position: relative;
  margin: 35px 0;
  display: block;
  text-align: center;

  @media screen and (min-width: 641px) {
    margin: 50px 0;
  }

  .ContactHeader {
    margin-top: 0 !important;
    font-size: 24px;
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

    @media screen and (max-width: 640px) {
      margin-bottom: 10px;
    }
  }
`;

export const ContactContent = styled.div`
  margin-top: 0;
  max-width: 680px;
  margin: 35px auto;
`;

export const ContentHeader = styled.div`
  position: relative;
  text-align: center;

  @media screen and (min-width: 641px) {
    margin: 50px 0;
  }
`;

export const Details = styled.div`
  margin-top: 0;

  @media screen and (min-width: 641px) {
    margin-bottom: 80px;
  }

  .details {
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
    display: block;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-style: normal;
    color: #5c5c5c;
    font-family: "Century Gothic", sans-serif;
    line-height: 1.65;
    font-weight: 400;
  }

  .mainDetails {
    text-align: left;
    margin-bottom: 0;
    margin-top: 0;
    display: block;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-style: normal;
    color: #5c5c5c;
    font-family: "Century Gothic", sans-serif;
    line-height: 1.65;
    font-weight: 400;
  }

  .link {
    text-decoration: none;
    color: #5c5c5c;
  }
`;
