import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useStateValue } from "../context/StateProvider";

const SearchPage = () => {
  const [tops, settops] = useState([
    {
      Title: "Regular-fit Mao collar linen shirt",
      price: "₹2800",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87017634_01-99999999_01.jpg?ts=1620035603940&imwidth=550&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Slim-fit Mao collar linen shirt",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87045625_99.jpg?ts=1614780314736&imwidth=550&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Linen-knit shirt",
      price: "₹3850",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87085673_37.jpg?ts=1612525104420&imwidth=550&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Printed flowy shirt",
      price: "₹4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17000193_99_D5.jpg?ts=1617264288134&imwidth=550&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Hoodie cotton sweatshirt",
      price: "₹999",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87117895_02-99999999_01.jpg?ts=1608122067360&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cotton-blend knit sweatshirt",
      price: "₹1750",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87024006_92.jpg?ts=1606728870598&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Sustainable cotton jumper",
      price: "₹1600",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065905_08.jpg?ts=1614845086522&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Mineral dye cotton hoodie",
      price: "₹1800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87067148_06_D2.jpg?ts=1617890702088&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Hoodie cotton sweatshirt",
      price: "₹1400",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87070541_69.jpg?ts=1613469915675&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Flowy zip-up polo shirt",
      price: "₹1300",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87045669_99.jpg?ts=1613659437181&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Knitted polo shirt with zip",
      price: "₹1100",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87005677_58.jpg?ts=1615367105552&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cuadrillé structure knit polo shirt",
      price: "₹950",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87075688_56_D1.jpg?ts=1612532188550&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Slim fit 100% linen polo shirt",
      price: "₹1200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055641_01_D1.jpg?ts=1614341111500&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cuadrillé structure knit polo shirt",
      price: "₹950",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87075688_70.jpg?ts=1613645061986&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },

    {
      Title: "Cotton linen-blend polo shirt",
      price: "₹800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87035671_CO.jpg?ts=1616418326466&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cotton linen-blend polo shirt",
      price: "₹800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87035671_39.jpg?ts=1616418326466&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Knit contrast trim polo shirt",
      price: "₹1200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055684_01.jpg?ts=1613469915675&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Printed flowy shirt",
      price: "₹5600",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17051098_52.jpg?ts=1621953708679&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Fluid striped regular-fit shirt",
      price: "₹2100",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17051095_20.jpg?ts=1621525458109&imwidth=550&imdensity=1",
      Description: "",
      id: uuid(),
    },
  ]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderContainer_Section>
            <h1 className='Header_heading'>Search</h1>
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

export default SearchPage;

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
    -webkit-font-smoothing: import { useStateValue } from './../context/StateProvider';
antialiased;
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
