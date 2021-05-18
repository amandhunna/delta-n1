import styled from "styled-components";

import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const HeaderWrapper = styled.div`
  margin-left: 35px;
  margin-top: 15px;
  margin-right: 35px;
  background: white;
  color: #5c5c5c;
  height: 50px;

  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: block;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  --window-height: 947px;
  --announcement-bar-height: 40px;
  --header-height: 123px;
  --header-is-not-transparent: 1;
`;

export const HeaderTop = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const HeaderLeft = styled.div`
  flex: 0.6;

  align-items: center;

  .header__Logo {
    margin-right: 0px;
    margin-left: 70%;
  }
  .header__Logo__Image {
    margin: 0 auto;
    transition: opacity 0.3s ease-in-out;
    display: block;
    height: auto;
    border-style: none;
    vertical-align: top;
    width: 120px;
    @media screen and (min-width: 641px) {
      max-width: 100%;
    }
  }
  @media screen and (min-width: 1240px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1240px) {
    margin-bottom: 40px;
  }
`;

export const HeaderRight = styled.div`
  justify-content: flex-end;
  flex: 0.4;
  align-items: center;
  display: flex;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  @media screen and (min-width: 1240px) {
    margin-bottom: 40px;
  }
`;

export const HeaderBottom = styled.div`
  margin-top: 40px;
`;

export const User = styled(PersonIcon)`
  @media screen and (min-width: 641px) {
    .MuiSvgIcon-root {
      position: relative;
      top: 2px;
      width: 20px;
      height: 20px;
    }
  }
  display: flex;
  font-size: 1.5rem;
  font-color: black !important;
  margin-right: 1rem;
  align-items: center;
  cursor: pointer;
  .MuiSvgIcon-root {
    text-decoration: none !important;
    font-color: black;
  }
  @media screen and (max-width: 641px) {
    display: none;
  } ;
`;

export const Cart = styled(ShoppingCartIcon)`
  @media screen and (min-width: 641px) .Header__Icon .Icon--account {
    position: relative;
    top: 2px;
    width: 20px;
    height: 20px;
  }
  display: flex;
  font-size: 1.5rem;
  font-color: black;
  margin-right: 1rem;
  cursor: pointer;
  .user {
    text-decoration: none !important;
    color: black;
  }
`;

export const Search = styled(SearchIcon)`
  @media screen and (min-width: 641px) .Header__Icon .Icon--account {
    position: relative;
    top: 2px;
    width: 20px;
    height: 20px;
  }
  display: flex;
  font-size: 1.5rem;
  font-color: black;
  margin-right: 1rem;
  cursor: pointer;
  .user {
    text-decoration: none !important;
    color: black;
  }
`;
