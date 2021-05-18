import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SearchBarWrapper = styled.div`
  position: absolute;
  margin-top: 70px;
  --header-height: 77px;
  width: 100%;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  box-shadow: 0 -1px #e7e7e7 inset;
  transform: translateY(0);
  z-index: 1000;
`;

export const SearchInner = styled.div`
  @media screen and (min-width: 641px) {
    .SeachInner {
      padding: 28px 50px;
    }
  }

  max-height: calc(100vh - var(--header-height) - 88px);
  overflow: auto;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  background: white;
  line-height: 1.65;
`;

export const Search_SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  margin-top: 1em;
  padding: 25px;
  border-bottom: 1px solid #e7e7e7;

  .input {
    margin-left: 25px;
    border: none;
    border-style: none;
    outline: none;
    background: none;
    width: 100%;
    font-family: "Century Gothic", sans-serif;

    font-style: normal;
    color: #5c5c5c;
    background: white;
    line-height: 1.65;
    vertical-align: middle;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    line-height: normal;
    border-radius: 0;
    margin: 0;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    cursor: text;

    .&:focus {
      outline: none;
    }
  }
`;

export const SearchIcons = styled.div`
cursor : pointer;


.MuiSvgIcon {
  @ media screen and (min-width: 641px) {
    margin-right:20px;
    margin-left : 25px
  }
  
  
  
}
`;
