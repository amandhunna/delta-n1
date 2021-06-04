import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const NewArrivalsWomanBottoms = () => {
  const [tops, settops] = useState([
    {
      Title: "Cotton pleated pants",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87044753_05-99999999_01.jpg?ts=1620736903260&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Linen bow Bermuda shorts",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87057878_09_D2.jpg?ts=1617806529453&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Darts lyocell trousers",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87068637_TM-99999999_01.jpg?ts=1618389634725&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Cotton culotte trousers",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87046312_05-99999999_01.jpg?ts=1612969480669&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "100% linen pants",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87077623_05-99999999_01.jpg?ts=1615200262197&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Cotton pleated pants",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos_alt/S20/87044753_37_01_O1.jpg?ts=1621509060000&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pleat straight trousers",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87065645_07-99999999_01.jpg?ts=1613566007048&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pleat straight trousers",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065645_45_D2.jpg?ts=1610359495067&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pleat detail pants",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87074026_99_D4.jpg?ts=1608739507633&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Straight lyocell pants",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87076307_99-99999999_01.jpg?ts=1612969480669&imwidth=556&imdensity=1",
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

export default NewArrivalsWomanBottoms;

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
