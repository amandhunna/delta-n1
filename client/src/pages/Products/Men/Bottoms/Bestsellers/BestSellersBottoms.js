import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const BestSellersBottoms = () => {
  const [tops, settops] = useState([
    {
      Title: "Mineral dyed joggers",
      price: "₹5,590",

      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87057149_06.jpg?ts=1617890702088&imwidth=180&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Slim-fit check linen trousers",
      price: "₹5,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065671_92.jpg?ts=1614780314736&imwidth=180&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Linen jogger trousers",
      price: "₹4,590",

      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87047116_05.jpg?ts=1617116697880&imwidth=180&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Relaxed linen trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17010047_37.jpg?ts=1620654127889&imwidth=180&imdensity=2",

      id: uuid(),
    },
    {
      Title: "Packable Collection slim-fit trouser",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87004014_56.jpg?ts=1611140815512&imwidth=180&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Technical jogger shorts",
      price: "₹3,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87085908_99.jpg?ts=1614844015805&imwidth=180&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Ben tapered-fit jeans",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17002517_TN-99999999_01.jpg?ts=1620389591187&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Light wash loose-fit jeans",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17060929_TC-99999999_01.jpg?ts=1621955126275&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Ben white tapered-fit jeans",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87044766_01-99999999_01.jpg?ts=1613405112465&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Slim fit Ultra Soft Touch Patrick jeans",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87040557_TG-99999999_01.jpg?ts=1614772016460&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Slim fit Ultra Soft Touch Patrick jeans",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87020559_TO-99999999_01.jpg?ts=1606898072799&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Ben tapered-fit light-wash jeans",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87000532_TC-99999999_01.jpg?ts=1614782803896&imwidth=251&imdensity=2",
      id: uuid(),
    },
  ]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderContainer_Section>
            <h1 className='Header_heading'>BestSellers</h1>
            <div class='Header__Description'>
              <p> {tops.length} results for Tops</p>
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

export default BestSellersBottoms;

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
