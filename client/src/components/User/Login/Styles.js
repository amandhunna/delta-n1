import styled from "styled-components";

export const LoginWrapper = styled.div``;

export const LoginSection = styled.div`
  display: block;
  box-sizing: border-box !important;
  webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
  window-height: 937px;
  header-height: 77px;
  header-is-not-transparent: 1;
`;

export const LoginContainer = styled.div`
  margin: 0 auto;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
  @media screen and (min-width: 641px) {
    padding: 0 50px;
  }
`;

export const LoginPageContent = styled.div`
  margin: 35px auto;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  max-width: 400px;
  color: #5c5c5c;
  align-items: center;
  display: flex;
  line-height: 1.65;

  @media screen and (min-width: 641px) {
    min-height: calc(937px - 77px - 160px);
    margin-bottom: 80px;
    margin-top: 80px;
  } ;
`;

export const LoginForm = styled.form`
  display: block;
  width: 100%;

  @media screen and (max-width: 641px) {
    margin-top: 5rem;
    font-size: 12px;
  }
`;

export const LoginFormHeader = styled.header`
  margin-bottom: 24px;
  text-align: center;
  display: block;
  box-sizing: border-box !important;
  webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;

  .formTitle {
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    line-height: 1.65;

    @media screen and (min-width: 641px) {
      font-size: 22px;
    }

    @media screen and (max-width: 641px) {
      font-size: 22px;
    }
  }

  .formLegend {
    margin-bottom: 0;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    font-family: "Century Gothic", sans-serif;
    font-style: normal;
    color: #5c5c5c;
    line-height: 1.65;

    @media screen and (max-width: 641px) {
      font-size: 12px;
    }
  }
`;

export const LoginFormItem = styled.div`
  margin-bottom: 15px;
  position: relative;
  display: block;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;

  .formInput {
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: 16px 18px;
    background-position: 98% 50%;
    cursor: pointer;
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
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
    text-size-adjust: 100%;

    @media screen and (max-width: 405px) {
      width: 80vw;
      margin: 35px;
    }
  }

  .floatingLabel {
    position: absolute;
    bottom: calc(100% - 8px);
    left: 10px;
    padding: 0 5px;
    line-height: normal;
    color: #939393;
    font-size: 11px;
    opacity: 0;
    background: rgba(255, 255, 255, 0);
    pointer-events: none;
    transform: translateY(3px);
    transition: all 0.3s ease-in-out;
    cursor: default;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    --window-height: 937px;
    --header-height: 61px;
    --header-is-not-transparent: 1;
  }

  /* .forgetPassword {
    position: absolute;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    right: 12px;
    font: inherit;
    margin: 0;
    padding: 0;
    overflow: visible;
    background: none;
    border: none;
    border-radius: 0;
    top: 50%;
    font-size: 11px;
    color: #939393;
    transform: translateY(-50%);
    -webkit-appearance: button;
    text-transform: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  } */
`;

export const LoginSubmit = styled.button`
  display: block;
  margin-top: 20px;
  width: 100%;
  color: white;
  border-color: #ff9999;
  position: relative;
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
  background: #ff9999;
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  -webkit-tap-highlight-color: initial;
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  font: inherit;
  margin: 0;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;
  --window-height: 937px;
  --header-height: 61px;
  --header-is-not-transparent: 1;

  &:hover {
    transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  @media screen and (max-width: 405px) {
    width: 80vw;
    margin: 35px;
  }
`;

export const LoginHint = styled.div`
  margin-bottom: 32px;
  display: flex;
  text-align: center;
  margin: 24px 0 0 0;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  display: block;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  text-align: center;
  line-height: 1.65;

  .text {
    color: #939393;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;

    line-height: 1.65;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
  }

  .restore {
    cursor: pointer;
    color: #939393;
  }

  .linkToRegister {
    color: inherit;
    background-color: transparent;
    text-decoration: none;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const LoginSocials = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .facebookLogo {
    object-fit: contain;
    align-items: center;
    height: 35px;
  }

  .googleLogo {
    object-fit: contain;
    align-items: center;
    height: 35px;
  }
`;

export const SocialButtons = styled.button`
  background: none;
  outline: none;
  margin: 15px;
  border-width: 0;
  cursor: pointer;
`;
