import styled from "styled-components";
import {
  RiAccountCircleLine,
  RiShoppingCartLine,
  RiSearchLine,
} from "react-icons/ri";

import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const HeaderWrapper = styled.div`
  margin: 15px;
  background: white;
  display: flex;
  color: #5c5c5c;
  box-shadow: 0 -1px #e7e7e7 inset;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  background: white;
  line-height: 1.65;
  --window-height: 1145px;
  --announcement-bar-height: 40px;
  --header-height: 77px;
  --header-is-not-transparent: 1;
  text-size-adjust: 100%;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 0.4;
  align-items: center;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
  --window-height: 1145px;
  --header-height: 25px;
  --header-is-not-transparent: 1;
  --use-sticky-header: 1;
  --use-unsticky-header: 0;
  font-size: 13px;
  text-size-adjust: 100%;
  cursor: pointer;
`;
export const HeaderMid = styled.div`

  .header__logo {
    margin-bottom: 0;
    flex:0.1
    position: realtive;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    background: white;
    line-height: 1.65;
    --window-height: 1145px;
    --announcement-bar-height: 40px;
    --header-height: 25px;
    --header-is-not-transparent: 1;

    @media screen and (min-width: 641px) {
      .header__logo {
        max-width: 100%;
        margin: 0 auto;
        transition: opacity 0.3s ease-in-out;
        height: auto;
        border-style: none;
        vertical-align: top;
        width: 120px;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0.6;
  align-items: center;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
  --window-height: 1145px;
  --announcement-bar-height: 40px;
  --header-height: 25px;
  --header-is-not-transparent: 1;
  --use-sticky-header: 1;
  --use-unsticky-header: 0;
  text-size-adjust: 100%;

  @media screen and (max-width: 641px) {
    .icon {
      display: none;
    }
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

export const MobileIcon = styled.div`
  display: block;
  left: 0;
  font-size: 1.5rem;
  align-items: center;
`;
