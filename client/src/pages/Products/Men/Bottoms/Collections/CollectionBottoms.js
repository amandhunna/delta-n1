import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const CollectionBottoms = () => {
  const [tops, settops] = useState([
    {
      Title: "Super slim fit microstructure suit trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87120033_56-99999999_01.jpg?ts=1620133505747&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Slim fit microstructure suit trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87100019_55-99999999_01.jpg?ts=1607691919543&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Super slim fit checked Tailored trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87100037_69-99999999_01.jpg?ts=1607691919543&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Slim fit wool suit trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87104389_92-99999999_01.jpg?ts=1607693662083&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Check wool-blend trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87070516_30.jpg?ts=1606476862057&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Slim fit linen suit trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87005567_54-99999999_01.jpg?ts=1612521833613&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Slim fit linen trousers",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065624_31.jpg?ts=1612519523397&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Linen chino Bermuda shorts",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87085623_37-99999999_01.jpg?ts=1612521833613&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Chino Bermuda shorts",
      price: "₹2290",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17010032_06-99999999_01.jpg?ts=1620730784206&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Technical jogger shorts",
      price: "₹3,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17010048_56.jpg?ts=1620659138504&imwidth=251&imdensity=2",
      id: uuid(),
    },
    {
      Title: "Checked linen Bermuda shorts",
      price: "₹4,590",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87029025_92.jpg?ts=1614614702666&imwidth=251&imdensity=2",
      id: uuid(),
    },
  ]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderContainer_Section>
            <h1 className='Header_heading'>Collections</h1>
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

export default CollectionBottoms;

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
