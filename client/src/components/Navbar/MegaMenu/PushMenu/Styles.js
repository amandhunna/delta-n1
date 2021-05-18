import styled from "styled-components";

export const PushMenuWrapper = styled.div`
  padding-right: 15px;
  width: 50%;
  display: inline-block;
  text-align: center;
  vertical-align: top;

  .link {
    text-decoration: none;
    color: #939393;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 370px;
  margin: 8px auto 20px auto;
  overflow: hidden;
  position: relative;
  display: block;
  cursor: pointer;
  text-align: center;

  .image {
    opacity: 1;
    object-fit: contain;
    height: 70%;
    width: 70%;
    max-height: 100%;
    max-width: 100%;
    border-style: none;
    vertical-align: top;
    cursor: pointer;
    text-align: center;

    &.hover {
      transform: scale(1);
      transition: opacity 0.3s ease,
        transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }

  .details {
    color: #939393;
    text-decoration: none;
    margin-bottom: 0;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    cursor: pointer;

    @media screen and (min-width: 641px) {
      font-size: 22px;
    }
  }
`;
