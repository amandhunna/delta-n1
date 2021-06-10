import styled from "styled-components";

export const Options = styled.div`
  border-top: none;
  border-color: rgba(92, 92, 92, 0.25);
  border-bottom: 1px solid #e7e7e7;
  overflow: hidden;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  color: #5c5c5c;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
`;

export const MenuButton = styled.button`
  color: #5c5c5c;
  display: block;
  position: relative;
  width: 100%;
  padding: 20px 0;
  text-align: left;
  cursor: pointer;
  font-size: 13px;
  font-family: Futura, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  overflow: visible;
  background: none;
  border: none;
  border-radius: 0;
  font: inherit;
  margin: 0;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  text-indent: 0px;
  text-shadow: none;
  word-spacing: normal;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;

  .MuiSvgIcon-root {
    position: absolute;

    right: 0;
    top: calc(50% - (11px / 2));
    width: 11px;
    word-spacing: normal;
    text-rendering: auto;
    height: 11px;
    font-size: 30px;
    text-align: left;
    cursor: pointer;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    font: inherit;

    &:focus {
      width: 1px;
      height: 11px;
      position: absolute;
      content: "";
      top: 50%;
      box-sizing: border-box !important;
      -webkit-font-smoothing: antialiased;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
      background-color: currentColor;
      transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    }
  }
`;
