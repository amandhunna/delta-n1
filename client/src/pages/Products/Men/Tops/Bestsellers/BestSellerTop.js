import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const BestSellerTop = () => {
  const [tops, settops] = useState([
    {
      Title: "100% linen regular-fit shirt",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87015667_07.jpg?ts=1614780314736&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular fit corduroy overshirt",
      price: "₹.5,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87187877_30.jpg?ts=1607691919543&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular-fit lyocell fluid linen shirt",
      price: "₹5,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87027643_01.jpg?ts=1617180197038&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "100% linen regular-fit shirt",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87015667_43.jpg?ts=1614600324101&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular-fit pocket overshirt",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87004009_37.jpg?ts=1612532188550&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular-fit Mao collar linen shirt",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87017634_37.jpg?ts=1617264288134&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular-fit striped linen shirt",
      price: "₹4,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87017642_01.jpg?ts=1616745941857&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular fit striped cotton shirt",
      price: "₹3,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87020512_43.jpg?ts=1604322273769&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular fit checked flannel shirt",
      price: "₹3,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87040511_37.jpg?ts=1606136687557&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular fit flowy shirt",
      price: "₹3,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87035654_08.jpg?ts=1613469915675&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular-fit fluid striped shirt",
      price: "₹3,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87015662_99.jpg?ts=1614951944160&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Stretch waterproof polo shirt",
      price: "₹3,990",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87087121_56.jpg?ts=1615370707330&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Striped linen knit polo",
      price: "₹3,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87015674_56.jpg?ts=1614600324101&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Regular fit 100% linen T-shirt",
      price: "₹2,990",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87045641_28.jpg?ts=1614780314736&imwidth=398&imdensity=1",
      id: uuid(),
    },

    {
      Title: "Modal cotton t-shirt",
      price: "₹2,990",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055683_01.jpg?ts=1613469915675&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Sustainable cotton t-shirt",
      price: "₹2,990",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87030540_37.jpg?ts=1604405017890&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Flecked linen cardigan",
      price: "₹5,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065708_54.jpg?ts=1618301093474&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "High collar wool sweater",
      price: "₹5,590",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87138263_91.jpg?ts=1610636719819&imwidth=398&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Pockets cotton field jacket",
      price: "₹8,990",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87004006_37.jpg?ts=1611309892192&imwidth=398&imdensity=1",
      id: uuid(),
    },
  ]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderContainer_Section>
            <h1 className='Header_heading'>BestSeller</h1>
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

export default BestSellerTop;

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
