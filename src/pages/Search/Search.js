import React, { useState } from "react";
import uuid from "react-uuid";
import ProductContainer from './../../components/ProductContainer';
import './search.css';

function Search() {
  const [tops] = useState([
    {
      name: "Regular-fit Mao collar linen shirt",
      price: "₹2800",
      Description: "",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87017634_01-99999999_01.jpg?ts=1620035603940&imwidth=550&imdensity=1",
        productId: uuid(),
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

  const top = tops[0]; 
  return (
    <div className="search-page">
      <div className="search-product">
        <ProductContainer  product={top}/>
      </div>
    </div>);
  
};

export default Search;
