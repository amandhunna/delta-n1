import styled from "styled-components";

export const NavbarHorzizontalList = styled.div`
  
  margin-bottom:10px
  display:flex;
 
  padding: 0;
  margin-block-start: 1em;
  box-shadow: 0 -1px #e7e7e7 inset;
  border-bottom: 0.5px  #e7e7e7;
 
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  display: block;
  text-align: center;
  

  @media screen and (min-width: 1240px) {
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
`;

export const ListItem = styled.div`
  display: inline-block;
  margin: 6px 8px 6px 8px;
  text-align: -webkit-match-parent;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;

  .navLink {
    color: #5c5c5c;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    line-height: 1.65;

    .linkSpacer {
      position: absolute;
      display: block;
      bottom: 0;
      color: transparent;
      pointer-events: none;
      user-select: none;
      cursor: pointer;
    }

    @media screen and (min-width: 641px) {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 1240px) {
    margin-right: 21px;
    margin-left: 21px;
  }
`;
