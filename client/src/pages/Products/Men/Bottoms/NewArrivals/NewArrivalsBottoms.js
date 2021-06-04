import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const NewArrivalsBottoms = () => {
  const [tops, settops] = useState([
    {
      Title: "Colour skinny jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87057114_40-99999999_01.jpg?ts=1617199483102&imwidth=251&imdensity=2",
      id: uuid(),
    },

    {
      Title: "Skinny dark wash Jude jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87000530_TO-99999999_01.jpg?ts=1618992294879&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Skinny medium wash Jude jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17012007_TM-99999999_01.jpg?ts=1620389591187&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Skinny black Jude jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17012006_TN-99999999_01.jpg?ts=1620660956133&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Skinny grey Jude jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17062004_TG-99999999_01.jpg?ts=1622469133194&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Skinny-fit light grey Jude jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17012008_TU-99999999_01.jpg?ts=1620639646827&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Tapered-fit soft lyocell touch Tom jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87077621_TG.jpg?ts=1611849902754&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Skinny dark wash Jude jeans",
      price: "₹5590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87012503_BB-99999999_01.jpg?ts=1619420689845&imwidth=251&imdensity=2",
      id: uuid(),
    },
  ]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderContainer_Section>
            <h1 className='Header_heading'>New Arrivals</h1>
            <div class='Header__Description'>
              <p>Showing {tops.length} results</p>
            </div>
          </HeaderContainer_Section>
        </HeaderContainer>
      </Header>
      {tops.map((top) => (
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

export default NewArrivalsBottoms;

export const Header = styled.div`
  margin: 50px 0;
  position: relative;
`;

export const HeaderContainer = styled.div`
  padding: 0 80px;
  margin: 0 auto;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
`;

export const HeaderContainer_Section = styled.div`
  text-align: center;

  .Header_heading {
    margin-top: 0 !important;
    font-size: 20px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }

  .Header__Description {
    margin-left: auto;
    margin-right: auto;
    font-size: 13px;
    margin-top: 0 !important;
    max-width: 5000px;
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
  }
`;

export const Home = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 600px) {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

export const Image_Product = styled.div`
  margin-top: 20px;

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
    font-weight: 1000;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0;
    font-size: 25px;
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
    font-size: 19px;
    font-style: normal;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 11px;

    .ProductItem__Title {
      display: block;
      margin-bottom: 4px;
      font-family: Futura, sans-serif;
      font-weight: 1000;
      font-style: normal;
      color: #5c5c5c;
      transition: color 0.2s ease-in-out;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-top: 0;
      font-size: inherit;
    }
    .money {
      color: #939393;
      font-family: Futura, sans-serif;
      font-weight: 400;
      font-size: 11px;
      font-style: normal;
    }
  }
`;

export const Image_Product_Wrapper = styled.div`
  .ProductItem__Image {
    height: 700px;
  }

  @media only screen and (max-width: 600px) {
    .ProductItem__Image {
      height: 300px;
    }
  }
`;
