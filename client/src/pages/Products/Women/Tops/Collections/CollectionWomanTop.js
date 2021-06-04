import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const CollectionWomanTop = () => {
  const [tops, settops] = useState([
    {
      Title: "Wrap neckline satin jumpsuit",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87095678_30-99999999_01.jpg?ts=1614596729776&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pleated satin dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87025686_50_D4.jpg?ts=1613156679640&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pleated suit pants",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87012886_99_D2.jpg?ts=1606300544915&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Textured ruffled dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87038260_11.jpg?ts=1619620992259&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Modal-blend suit blazer",
      price: "₹7800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055674_05.jpg?ts=1615556309785&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Polka-dot print jumpsuit",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87095665_99.jpg?ts=1613581483188&imwidth=556&imdensity=1",
      id: uuid(),
    },

    {
      Title: "Wrap neckline dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87058634_05-99999999_01.jpg?ts=1617188688280&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Satin finish flowy blouse",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87048253_05.jpg?ts=1617188688280&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Bow wrap dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87007877_05-99999999_01.jpg?ts=1617094091216&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Printed halter gown",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87007130_01.jpg?ts=1615283647984&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Crepe blazer with belt",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87064019_99_D1.jpg?ts=1607337274722&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Belt printed dress",
      price: "₹5800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87025722_02-99999999_01.jpg?ts=1614339879799&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Asymmetric design top",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87085646_99-99999999_01.jpg?ts=1613059484447&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Fitted blazer with pocket",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87014020_99-99999999_01.jpg?ts=1608726881229&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Belt straight-fit pants",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87085668_07-99999999_01.jpg?ts=1613991889631&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Flowy printed dress",
      price: "₹2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17060173_20_D2.jpg?ts=1620723967818&imwidth=556&imdensity=1",
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

export default CollectionWomanTop;

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
