import styled from "styled-components";

export const SideDrawerWrapper = styled.div`
  max-height: 946px;
  height: 100%;
  width: 65vw;
  background: white;
  color: #5c5c5c;
  position: fixed;
  padding-left: 15px;
  top: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: none;
  touch-action: manipulation;

  @media screen and (min-width: 641px) {
    .SideDrawerWrapper {
      width: 340px;
    }
  }

  .MuiSvgIcon-root {
    fill: currentColor;
    vertical-align: middle;
    display: inline-block;
  }
`;

export const DrawerHeader = styled.div`
  @media screen and (min-width: 641px) {
    max-height: 80px;
    min-height: 60px;
  }
  height: 77px;
  background: inherit;
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Empty = styled.div`
  top: 0;
  height: 25px;
  background-image: linear-gradient(
    white,
    rgba(255, 255, 255, 0.6) 40%,
    rgba(255, 255, 255, 0)
  );
  position: absolute;
  content: "";
  width: 100%;
  pointer-events: none;
  z-index: 1;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
`;

export const DrawerMain = styled.div`
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s;
  flex: 1 1 auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  line-height: 1.65;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-size-adjust: 100%;
`;

export const DrawerContainer = styled.div`
  width: 100%;
  color: #5c5c5c;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;

  @media screen and (min-width: 641px) {
    padding-left: 30px;
    padding-right: 30px;
    overflow: hidden;
  }
`;

export const DrawerMenu_Primary = styled.nav`
  display: flex;
  flex-direction: column;
  color: #5c5c5c;
`;

export const DrawerMenu_Secondary = styled.nav`
  margin-top: 28px;
  display: block;
  color: #5c5c5c;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.65;
  font-size: 13px;
  text-size-adjust: 100%;

  .linkList {
    border-color: rgba(92, 92, 92, 0.25);
    list-style: none;
    padding: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    display: block;
    color: #5c5c5c;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    line-height: 1.65;
    font-style: normal;
  }

  .linkList__item {
    margin-bottom: 0 !important;
    width: 100%;
    line-height: 1.5;
    text-align: left;
    transition: all 0.2s ease-in-out;
    position: relative;
    display: block;
  }

  .account {
    display: block;
    width: 100%;
    text-align: inherit;

    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    color: rgba(92, 92, 92, 0.5);
    background-color: transparent;
    text-decoration: none !important;
    line-height: 1.5;
  }

  .h3 {
    text-decoration: none !important;
  }
`;

export const AfterEmpty = styled.div`
  box-sizing: border-box !important;
  display: block;
  content: "";
  height: 35px;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
`;

export const DrawerFooter = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.65;
  width: 100%;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  min-height: 48px;
  box-shadow: 0 1px rgb(92 92 92 / 25%) inset;
  color: rgba(92, 92, 92, 0.5);
  flex: none;
`;

export const FooterBefore = styled.div`
  bottom: 100%;
  height: 30px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.6) 40%,
    white
  );
position: 
  content: "";
  width: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const Socials = styled.div`
  bottom: 0;
  display: inline-block;
  margin: 6px 8px 6px 8px;

  .instagram {
    color: inherit;
    margin: 15px;
    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    background-color: transparent;
    text-decoration: none;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;
