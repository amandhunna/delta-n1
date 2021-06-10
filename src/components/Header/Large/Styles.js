import styled from "styled-components";

import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const Header = styled.div`
  background: white;
  color: #5c5c5c;
  height: 55px;

  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: block;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  line-height: 1.65;
`;

export const Header__Wrapper = styled.div`
  padding-bottom: 24px;
  padding: 18px 50px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header__left = styled.div`
  margin-bottom: 40px;
  flex: 1 0 0;
  align-items: center;
  display: flex;
`;

export const Header__Mid = styled.div`
  margin-bottom: -10px;
  display: flex;

  .header__logo {
    margin-bottom: 0;
    position: relative;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
  }

  .header__logo__image {
    max-width: 100%;
    margin: 0 auto;
    transition: opacity 0.3s ease-in-out;
    isplay: block;
    height: auto;
    border-style: none;
    vertical-align: top;
  }
`;

export const Header__Right = styled.div`
  margin-bottom: 00px;
  justify-content: flex-end;
  flex: 1 0 0;
  align-items: center;
  display: flex;

  .MuiSvgIcon-root {
    display: inline-block;
    line-height: 1;
    transition: color 0.2s ease-in-out;
    position: relative;
    background: transparent;
    cursor: pointer;
    height: 23px;
    width: 19px;
    fill: currentColor;
    vertical-align: middle;
    stroke-width: 1px;
    background: none;
    pointer-events: none;
  }

  .btn {
    border: none;
    background: none;
    cursor: pointer;
  }
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
