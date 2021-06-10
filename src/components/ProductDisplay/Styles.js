import styled from "styled-components";

export const Main = styled.div`
  display: block;

  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
`;

export const Section = styled.div`
  display: block;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  background: white;
  line-height: 1.65;
`;

export const Header = styled.div`
  margin: 50px 0;
  position: relative;
`;

export const HeaderContainer = styled.div`
  padding: 0 80px;
  margin: 0 auto;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
`;

export const HeaderContainer_Section = styled.div`
  text-align: center;

  .Header_heading {
    margin-top: 0 !important;
    font-size: 22px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }

  .Header__Description {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0 !important;
    max-width: 5000px;
  }
`;

export const ProductList__Desktop = styled.div`
  margin-left: -40px;
  padding: 0 50px;

  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
`;

export const ProductList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
  height: 700px;
`;

export const Products = styled.div`
  display: flex;
`;
