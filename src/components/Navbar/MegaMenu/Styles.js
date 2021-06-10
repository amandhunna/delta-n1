import styled from "styled-components";

export const MegaMenuWrapper = styled.div`
  margin-top: 15px;
  position: absolute;
  max-height: calc(100vh - 123px);
  opacity: 1;
  position: absolute;
  padding: 20px 0;
  width: 100%;
  left: 0;
  overflow: auto;
  overscroll-behavior: contain;
  text-align: left;
  background: white;
  border-bottom: 1px solid #e7e7e7;
  transition: all 0.3s ease-in-out;
  display: block;
  z-index: 1000;
`;

export const MegaMenuInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: left;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const ListTypeTwo = styled.div`
  flex-shrink: 0;
  margin: 20px 40px;

  .link {
    color: #939393;
    display: block;
    margin-bottom: 20px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    @media screen and (min-width: 641px) {
      font-size: 12px;
    }
  }
`;
