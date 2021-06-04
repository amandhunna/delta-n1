import React from "react";
import styled from "styled-components";

const Images = ({ title, id, imageUrl, price }) => {
  return (
    <Image>
      <Image_Product>
        <Image_Product_Wrapper>
          <a href='' className='ProductItem__ImageWrapper'>
            <div className='AspectRatio '>
              <img class='ProductItem__Image' src={imageUrl} />
            </div>
          </a>
        </Image_Product_Wrapper>
        <div class='ProductItem__Info'>
          <h2 class='ProductItem__Title '>
            <a href='' className='link'>
              {title}
            </a>
          </h2>

          <div class='ProductItem__PriceList '>
            <span
              class='ProductItem__Price Price Text--subdued'
              data-money-convertible=''>
              <span class='money'>{price}</span>
            </span>
          </div>
        </div>
      </Image_Product>
    </Image>
  );
};

export default Images;

export const Image = styled.div`
  display: flex;
  margin-right: 50px;
  margin-left: 50px;
`;

export const Image_Product = styled.div`
  .ProductItem__Info {
    font-size: 11px;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    margin-top: 20px;
    text-align: center;
    white-space: normal;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.65;
    color: #5c5c5c;
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
    font-size: inherit;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .link {
    color: inherit;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-size: inherit;
  }

  .ProductItem__PriceList {
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    font-size: 11px;
  }

  .money {
    color: #939393;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-size: 11px;
    font-style: normal;
  }
`;

export const Image_Product_Wrapper = styled.div`
  .ProductItem__Image {
    height: 500px;
  }
`;
