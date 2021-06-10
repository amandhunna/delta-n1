import React from "react";
import styled from "styled-components";

const ImageMobile = () => {
  return (
    <Image>
      <Image_Product>
        <Image_Product_Wrapper>
          <a href='' className='ProductItem__ImageWrapper'>
            <div className='AspectRatio '>
              <img
                class='ProductItem__Image'
                src='//cdn.shopify.com/s/files/1/0082/5091/6915/products/141_200x.jpg?v=1572939720 200w, //cdn.shopify.com/s/files/1/0082/5091/6915/products/141_400x.jpg?v=1572939720 400w'
              />
            </div>
          </a>
        </Image_Product_Wrapper>
        <div class='ProductItem__Info'>
          <h2 class='ProductItem__Title '>
            <a href='' className='link'>
              Handloom Cotton Tussar
            </a>
          </h2>

          <div class='ProductItem__PriceList '>
            <span class='ProductItem__Price' data-money-convertible=''>
              <span class='money'>Rs. 1,200</span>
            </span>
          </div>
        </div>
      </Image_Product>
    </Image>
  );
};

export default ImageMobile;

export const Image = styled.div`
  margin-right: 5px;
  margin-left: 5px;
`;

export const Image_Product = styled.div`
  .ProductItem__Info {
    margin-top: 20px;
    font-size: 10px;
    text-align: center;
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
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: inherit;
    text-align: center;
    white-space: normal;
    line-height: 1.65;
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
  }

  .ProductItem__PriceList {
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-size: 10px;
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
    height: 250px;
  }
`;
