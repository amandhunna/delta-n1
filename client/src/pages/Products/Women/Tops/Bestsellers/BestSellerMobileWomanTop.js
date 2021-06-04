import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const BestSellerMobileWomanTop = () => {
  const [tops, settops] = useState([
    {
      Title: "Printed maxi dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87009409_52.jpg?ts=1618821624661&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Flowers cotton dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065665_85.jpg?ts=1613666719991&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Broderie anglaise cotton dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87018635_52.jpg?ts=1617030318686&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Printed ruched dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87018634_56.jpg?ts=1618389634725&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Paisley dress with ruffles",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87008636_52.jpg?ts=1618389634725&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Printed ruched dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87018634_70.jpg?ts=1618389634725&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Vent cotton dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17051081_99.jpg?ts=1619507120326&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Printed cotton dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17040174_02.jpg?ts=1620655509844&imwidth=398&imdensity=1",
      id: uuid(),
    },

    {
      Title: "Vichy check dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87007152_45.jpg?ts=1616996709179&imwidth=398&imdensity=1",
      id: uuid(),
    },

    /* Bottoms */

    {
      Title: "Pleat straight trousers",
      price: "₹4000",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065645_05.jpg?ts=1613581483188&imwidth=398&imdensity=1",
      id: uuid(),
    },

    {
      Title: "Cotton pleated pants",
      price: "₹1200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87044753_05.jpg?ts=1620736903260&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Linen bow Bermuda shorts",
      price: "₹4000",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87057878_09.jpg?ts=1617806529453&imwidth=398&imdensity=1",
      id: uuid(),
    },
  ]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderContainer_Section>
            <h1 className='Header_heading'>Best Sellers</h1>
            <div class='Header__Description'>
              <p> Showing {tops.length} results</p>
            </div>
          </HeaderContainer_Section>
        </HeaderContainer>
      </Header>
      {tops.sort().map((top) => (
        <Home>
          <Image_Product>
            <Image_Product_Wrapper>
              <a href='' className='ProductItem__ImageWrapper'>
                <div className='AspectRatio '>
                  <img class='ProductItem__Image' src={top.image} />
                </div>
              </a>
            </Image_Product_Wrapper>
            <div class='ProductItem__Info'>
              <h2 class='ProductItem__Title '>
                <a href='' className='link'>
                  {top.Title}
                </a>
              </h2>

              <div class='ProductItem__PriceList '>
                <span
                  class='ProductItem__Price Price Text--subdued'
                  data-money-convertible=''>
                  <span class='money'>{top.price}</span>
                </span>
              </div>
            </div>
          </Image_Product>
        </Home>
      ))}
    </>
  );
};

export default BestSellerMobileWomanTop;

export const Header = styled.div`
  position: relative;
  margin: 35px 0;
  display: block;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  line-height: 1.65;
  font-style: normal;
  color: #5c5c5c;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  display: block;
`;

export const HeaderContainer_Section = styled.div`
  text-align: center;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;

  .Header_heading {
    margin-bottom: 10px;
    margin-top: 0 !important;
    font-size: 22px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }

  .Header__Description {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0 !important;
    max-width: 5000px;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    display: block;
    text-align: center;
    font-family: "Century Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
  }
`;

export const Home = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Image_Product = styled.div`
  margin-top: 50px;

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
    height: 450px;
  }
`;
