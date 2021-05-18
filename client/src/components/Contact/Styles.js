import styled from "styled-components";

export const Conatainer = styled.div`
  background-color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  display: block;

  @media screen and (min-width: 1296px) {
    font-size: calc(1 * 1rem);
  }
`;

export const Content_Wrapper = styled.div`
  padding-top: 6.6vmax;
  padding-bottom: 6.6vmax;
  justify-content: flex-start;
  padding-right: 4vw;
  padding-left: 4vw;
  margin: 0 auto;
  box-sizing: content-box;
  display: flex;
  position: relative;
  max-width: 1200px;
  width: 100%;

  @media screen and (min-width: 1296px) {
    font-size: calc(1 * 1rem);
  }
`;

export const Content = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1296px) {
    font-size: calc(1 * 1rem);
  }
`;

export const ContentSection = styled.div`
  display: block;
`;

export const ContentOne = styled.div`
  margin-left: -17px;
  margin-right: -17px;
  width: auto !important;
`;

export const ContentColumn = styled.div`
  padding-right: 0;
  float: left;
  width: 100%;
  display: block;
`;

export const Header = styled.div`
  padding-top: 0;
  padding-left: 17px;
  padding-right: 17px;
  clear: none;
  position: relative;
  height: auto;
  padding-bottom: 17px;
`;

export const HeaderDetails = styled.div`
  outline: none;

  .details {
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 1rem 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    color: #000;
    margin-inline-end: 0px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0em;
    text-transform: none;
  }

  .contact {
    white-space: pre-wrap;
    margin-top: 0;
    color: #000;
    margin: 2rem 0;
    line-height: 1.2992;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    overflow-wrap: break-word;

    @media screen and (min-width: 1296px) {
      font-size: calc(2.8 * 1rem);
    }
  }
`;

export const Socials = styled.div`
  clear: both;
  padding-left: 17px;
  padding-right: 17px;
  position: relative;
  height: auto;
  padding-top: 17px;
  padding-bottom: 17px;
  display: block;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
`;

export const ContentSocial = styled.div`
  display: flex;

  .MuiSvgIcon-root {
    cursor: pointer;
  }

  .link {
    color: black;
    cursor: pointer;
    margin-left: 15px;
  }
`;
