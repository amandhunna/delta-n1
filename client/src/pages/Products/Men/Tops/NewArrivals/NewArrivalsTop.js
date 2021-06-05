import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useStateValue } from "../../../../../context/StateProvider";
import Image from "../../../../../components/Misc/Image";
import PayBtn from "../../../../../components/Misc/PayBtn";

const NewArrivalsTop = () => {
  const [{ cart }, dispatch] = useStateValue();

  const [tops, settops] = useState([
    {
      Title: "Regular-fit Mao collar linen shirt",
      price: "2800",
      Description: "",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87017634_01-99999999_01.jpg?ts=1620035603940&imwidth=550&imdensity=1",
      id: uuid(),
    },
    {
      Title: "Slim-fit Mao collar linen shirt",
      price: "2800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87045625_99.jpg?ts=1614780314736&imwidth=550&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Linen-knit shirt",
      price: "3850",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87085673_37.jpg?ts=1612525104420&imwidth=550&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Printed flowy shirt",
      price: "4500",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17000193_99_D5.jpg?ts=1617264288134&imwidth=550&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Hoodie cotton sweatshirt",
      price: "999",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87117895_02-99999999_01.jpg?ts=1608122067360&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cotton-blend knit sweatshirt",
      price: "1750",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87024006_92.jpg?ts=1606728870598&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Sustainable cotton jumper",
      price: "1600",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065905_08.jpg?ts=1614845086522&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Mineral dye cotton hoodie",
      price: "1800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87067148_06_D2.jpg?ts=1617890702088&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Hoodie cotton sweatshirt",
      price: "1400",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87070541_69.jpg?ts=1613469915675&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Flowy zip-up polo shirt",
      price: "1300",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87045669_99.jpg?ts=1613659437181&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Knitted polo shirt with zip",
      price: "1100",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87005677_58.jpg?ts=1615367105552&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cuadrillé structure knit polo shirt",
      price: "950",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87075688_56_D1.jpg?ts=1612532188550&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Slim fit 100% linen polo shirt",
      price: "1200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055641_01_D1.jpg?ts=1614341111500&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cuadrillé structure knit polo shirt",
      price: "950",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87075688_70.jpg?ts=1613645061986&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },

    {
      Title: "Cotton linen-blend polo shirt",
      price: "800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87035671_CO.jpg?ts=1616418326466&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Cotton linen-blend polo shirt",
      price: "800",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87035671_39.jpg?ts=1616418326466&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Knit contrast trim polo shirt",
      price: "1200",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055684_01.jpg?ts=1613469915675&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Printed flowy shirt",
      price: "5600",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17051098_52.jpg?ts=1621953708679&imwidth=556&imdensity=1",
      Description: "",
      id: uuid(),
    },
    {
      Title: "Fluid striped regular-fit shirt",
      price: "2100",
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
            <h1 className='Header_heading'>New Arrivals</h1>
            <div class='Header__Description'>
              <p>Showing {tops.length} results</p>
            </div>
          </HeaderContainer_Section>
        </HeaderContainer>
      </Header>

      <PayBtn />
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

export default NewArrivalsTop;

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
    max-width: 5000import Home from './Home';
px;import PayBtn from './../../../../../components/Misc/PayBtn';

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
