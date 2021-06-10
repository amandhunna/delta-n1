import styled from "styled-components";

export const ListWrapper = styled.div`
  flex-shrink: 0;
  margin: 20px 40px;
  box-sizing: border-box !important;
  webkit-font-smoothing: antialiased;
  display: block;
  text-align: left;
  color: #5c5c5c;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.65;

  .link {
    text-decoration: none;
  }

  .linkMain {
    text-decoration: none;
    font-family: "Century Gothic", sans-serif;
    color: #5c5c5c;
    font-weight: 800;

    font-style: normal;
    line-height: 1.65;
  }
`;

export const LinkList = styled.div`
  padding: 0;
  margin: 0;
  margin-block-start: 0px;
  margin-block-end: 0px;
  display: block;
  margin-bottom: 5px;
  font-family: "Century Gothic", sans-serif;
  font-weight: 900;
  font-style: normal;
`;

export const LinkListItem = styled.div`
  position: relative;
  display: block;
  margin-top: 22px;
  margin-bottom: 12px;
  width: 100%;
  line-height: 1.5;
  text-align: left;
  transition: all 0.2s ease-in-out;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;

  .linkListItem {
    color: #5c5c5c;
    display: block;
    width: 100%;
    text-align: inherit;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;
