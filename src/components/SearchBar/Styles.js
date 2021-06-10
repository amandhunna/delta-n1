import styled from "styled-components";

export const Search = styled.div`
  pointer-events: auto;
  display: flex;
  transform: translateY(0);
  display: block;
  position: absolute;
  background: white;
  margin-top: 77px;
  transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out,
    visibility 0.15s ease-in-out;
  z-index: -1;
  line-height: 1.65;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  z-index: 100;
`;

export const Search__Inner = styled.div`
  padding: 28px 50px;
  max-height: calc(100vh - 123px - 88px);
  overflow: auto;
  pointer-events: auto;
`;

export const Search__SearchBar = styled.div`
  display: flex;
  background: red;
  align-items: center;
`;

export const Search__Form = styled.form`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  margin-top: 0em;

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
  cursor: pointer;
  margin-right: 20px;
  margin-left: 25px;
`;

export const Search_Results = styled.div`
  display: block;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 48px;
`;

export const Search_Results_Layout = styled.div`
  display: flex;

  margin-left: 40vw;
  margin-right: 50vw;

  justify-content: center;
  /*  flex-wrap: nowrap; */
`;

export const Search_Results_Segments = styled.div`
  display: block;

  justify-content: center;

  .image {
    height: 31.25rem;
  }

  .ProductItem__Info {
    font-size: 11px;
    margin-top: 20px;
  }

  .ProductItem__Title {
    display: block;
    margin-bottom: 4px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0;
    text-align: center;
    white-space: normal;
    font-size: 1rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .ProductItem__PriceList {
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-size: 0.9rem;
    text-align: center;
    white-space: normal;
  }
`;
