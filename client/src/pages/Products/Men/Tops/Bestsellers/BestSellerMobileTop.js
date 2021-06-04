import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const BestSellerMobileTop = () => {
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
    /* bottoms */
    {
      Title: "Mineral dyed joggers",
      price: "₹5,590",
      Description:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87057149_06.jpg?ts=1617890702088&imwidth=180&imdensity=2",
      image: "",
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
      Description:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87047116_05.jpg?ts=1617116697880&imwidth=180&imdensity=2",
      image: "",
      id: uuid(),
    },
    {
      Title: "Relaxed linen trousers",
      price: "₹4,590",
      Description:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17010047_37.jpg?ts=1620654127889&imwidth=180&imdensity=2",
      image: "",
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
            <h1 className='Header_heading'>Best Sellers</h1>
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

export default BestSellerMobileTop;

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
