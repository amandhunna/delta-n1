import styled from "styled-components";

export const Collapsible__Inner = styled.div`
  height: auto;
  transition: height 0.35s ease-in-out, visibility 0s ease-in-out 0.35s;
  overflow: hidden;
  color: #5c5c5c;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const Collapsible__Content = styled.div`
  padding-bottom: 18px;
`;

export const Collapsible = styled.div`
  border-top: none;
  border-color: rgba(92, 92, 92, 0.25);
  margin-left: 16px;
  border: none;
  color: #5c5c5c;
`;

export const Collapsible__Button = styled.button`
  padding: 13px 0;
  color: rgba(92, 92, 92, 0.5);
  text-align: left;
  cursor: pointer;
  display: block;
  position: relative;
  width: 100%;
  font-family: Futura, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-appearance: button;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  overflow: visible;
  background: none;
  border: none;
  border-radius: 0;
  font: inherit;
  margin: 0;
  word-spacing: normal;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;

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

export const Collapsible__InnerTwo = styled.div`
  display: block;
  height: auto;
  transition: height 0.35s ease-in-out, visibility 0s ease-in-out 0.35s;
  overflow: hidden;
`;
