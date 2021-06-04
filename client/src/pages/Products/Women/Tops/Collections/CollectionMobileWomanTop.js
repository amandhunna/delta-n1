import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const CollectionMobileWomanTop = () => {
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

    /* Bottoms  */

    {
      Title: "Belt line pants",
      price: "₹3200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87067877_99-99999999_01.jpg?ts=1616679655023&imwidth=550&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pleated palazzo pants",
      price: "₹3200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87094033_02-99999999_01.jpg?ts=1609322738737&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "High-waist straight pants",
      price: "₹3200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87074023_99-99999999_01.jpg?ts=1611678874910&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Side slit satin pants",
      price: "₹3200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87047117_30_D3.jpg?ts=1615989908997&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Satin palazzo pants",
      price: "₹3200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87047119_OR-99999999_01.jpg?ts=1614084287156&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Dart high waist pants",
      price: "₹3200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87042520_70-99999999_01.jpg?ts=1607028647549&imwidth=550&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pleated culottes pants",
      price: "₹3200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87097134_81-99999999_01.jpg?ts=1615387516514&imwidth=556&imdensity=1",
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

export default CollectionMobileWomanTop;

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
