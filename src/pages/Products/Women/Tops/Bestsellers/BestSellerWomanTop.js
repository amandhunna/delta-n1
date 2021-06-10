import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import Image from "../../../../../components/Misc/Image";

const BestSellerWomanTop = () => {
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
  ]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderContainer_Section>
            <h1 className='Header_heading'>BestSeller_Woman_Top</h1>
            <div class='Header__Description'>
              <p> {tops.length} results for Tops</p>
            </div>
          </HeaderContainer_Section>
        </HeaderContainer>
      </Header>
      {tops.map((top) => (
        <Image
          Title={top.Title}
          price={top.price}
          id={top.id}
          image={top.image}
        />
      ))}
    </>
  );
};

export default BestSellerWomanTop;

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
