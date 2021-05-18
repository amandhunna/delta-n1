import styled from "styled-components";

export const PopUpContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  padding: 15px 20px 20px 20px;
  z-index: 20;
  overflow: auto;
  background: white;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;

  .MuiSvgIcon-root {
    position: absolute;
    margin-top: 0;
    top: 20px;
    right: 20px;
    line-height: 0;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
    display: block;
    margin: 25px auto 0 auto;
    flex-shrink: 0;
    webkit-appearance: button;
    cursor: pointer;
    text-transform: none;
    padding: 0;
    overflow: visible;
    background: none;
    border: none;
    border-radius: 0;
    color: inherit;
    box-sizing: border-box !important;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    text-align: center;
    align-items: flex-start;
  }

  @media screen and (max-width: 640px) {
    height: 100%;
    width: 100%;
    max-width: none;
    max-height: none;
  }
  @media screen and (min-width: 641px) {
    padding: 35px 40px 40px 40px;
    width: 30vw;
  }

  @media screen and (min-width: 1008px) {
    flex-direction: column;
  }
`;

export const PopUpHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
  display: block;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;

  .headerHeading {
    font-size: 20px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    text-align: center;
    margin-inline-end: 0px;
    line-height: 1.65;
  }

  .headerDescription {
    margin-bottom: 0;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    box-sizing: border-box !important;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Century Gothic", sans-serif;
    font-style: normal;
    color: #5c5c5c;
    line-height: 1.65;
  }

  @media screen and (max-width: 640px) {
    margin-top: 35px;
  }
`;
export const PopUpContent = styled.div`
  box-sizing: border-box !important;
  display: block;
`;

export const Form = styled.div`
  width: 100%;
  display: block;
  margin-top: 0em;

  box-sizing: border-box !important;
`;

export const FormItem = styled.div`
  margin-bottom: 15px;
  position: relative;
  box-sizing: border-box !important;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.65;
  color: #5c5c5c;

  .formInput {
    -webkit-appearance: none;
    display: block;
    padding: 12px 14px;
    border-radius: 0;
    border: 1px solid #e7e7e7;
    width: 100%;
    line-height: normal;
    resize: none;
    transition: border-color 0.1s ease-in-out;
    background: transparent;
    color: inherit;
    font: inherit;
    margin: 0;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    text-shadow: none;
    -webkit-rtl-ordering: logical;
    cursor: text;
  }
`;

export const ItemLabel = styled.label`
  position: absolute;
  bottom: calc(100% - 8px);
  left: 10px;
  padding: 0 5px;
  line-height: normal;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #939393;
  font-size: 11px;
  opacity: 0;
  background: rgba(255, 255, 255, 0);
  pointer-events: none;
  transform: translateY(3px);
  cursor: default;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box !important;
`;

export const FormButton = styled.button`
  display: block;
  margin-top: 20px;
  width: 100%;
  font: inherit;
  word-spacing: normal;
  margin: 0;
  align-items: flex-start;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: white;
  border-color: #ff9999;
  overflow: visible;
  position: relative;
  -webkit-appearance: button;
  cursor: pointer;
  padding: 14px 28px;
  line-height: normal;
  border: 1px solid transparent;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2em;
  font-family: Futura, sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  background-color: #ff9999;
  -webkit-tap-highlight-color: initial;

  :hover {
    transition: transform 0.45s rgba(0.785, 0.135, 0.15, 0.86);
  }
`;
