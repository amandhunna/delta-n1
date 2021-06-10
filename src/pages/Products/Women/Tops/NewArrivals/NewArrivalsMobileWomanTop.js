import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const NewArrivalsMobileWomanTop = () => {
  const [tops, settops] = useState([
    {
      Title: "Vent cotton dress",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17051081_99-99999999_01.jpg?ts=1620812362694&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Vent cotton dress",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17051081_20-99999999_01.jpg?ts=1620812362694&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Printed cotton dress",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17091076_20_D2.jpg?ts=1620911118810&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Frill cotton dress",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17071077_85_D3.jpg?ts=1620142867995&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Openwork knit top",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17071074_30.jpg?ts=1620142867995&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Crisscross strap dress",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87029404_50_D2.jpg?ts=1620142867995&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Frill cotton dress",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17071077_12.jpg?ts=1620142867995&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Crisscross strap dress",
      price: "₹3500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87029404_52.jpg?ts=1619624464230&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Wrap neckline dress",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17081078_52.jpg?ts=1620142867995&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Frill cotton dress",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17071080_85.jpg?ts=1620142867995&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Frill cotton dress",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17071080_02_D1.jpg?ts=1620911118810&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Handmade daisy print crochet top",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17011078_50_D2.jpg?ts=1620142867995&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Denim crop dungarees",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87069026_05_D3.jpg?ts=1620045590055&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Cotton dress with dart detail",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87081007_92-99999999_01.jpg?ts=1605004444848&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Printed cotton dress",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87024030_08_D1.jpg?ts=1611921883120&imwidth=556&imdensity=1",
      id: uuid(),
    },

    {
      Title: "Openwork detail blouse",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87081503_02_D1.jpg?ts=1608046468967&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Cotton culotte",
      price: "₹7500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87091007_16_D3.jpg?ts=1604937865562&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Oversized denim jacket",
      price: "₹6000",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17070108_TN-99999999_01.jpg?ts=1617890702088&imwidth=556&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Fine knitted pyjama shirt",
      price: "₹2500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87097657_05.jpg?ts=1617717462156&imwidth=556&imdensity=1",
      id: uuid(),
    },

    /* Bottoms */

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

export default NewArrivalsMobileWomanTop;

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
