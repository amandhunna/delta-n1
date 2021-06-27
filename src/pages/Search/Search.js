import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import ProductContainer from './../../components/ProductContainer';
import Skeleton from './../../components/Skeleton';
import { db } from './../../config/firebaseConfig';
import SearchBar from './../../components/SearchBar/Index'
import './search.css';

function Search() {
  const [tops, setTops] = useState([
    {
      name: "Regular-fit Mao collar linen shirt",
      price: "₹2800",
      Description: "",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87017634_01-99999999_01.jpg?ts=1620035603940&imwidth=550&imdensity=1",
        productId: uuid(),
    },
    {
      name: "Slim-fit Mao collar linen shirt",
      price: "₹2800",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87045625_99.jpg?ts=1614780314736&imwidth=550&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Linen-knit shirt",
      price: "₹3850",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87085673_37.jpg?ts=1612525104420&imwidth=550&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Printed flowy shirt",
      price: "₹4500",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17000193_99_D5.jpg?ts=1617264288134&imwidth=550&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Hoodie cotton sweatshirt",
      price: "₹999",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87117895_02-99999999_01.jpg?ts=1608122067360&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Cotton-blend knit sweatshirt",
      price: "₹1750",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87024006_92.jpg?ts=1606728870598&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Sustainable cotton jumper",
      price: "₹1600",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87065905_08.jpg?ts=1614845086522&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Mineral dye cotton hoodie",
      price: "₹1800",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87067148_06_D2.jpg?ts=1617890702088&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Hoodie cotton sweatshirt",
      price: "₹1400",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87070541_69.jpg?ts=1613469915675&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Flowy zip-up polo shirt",
      price: "₹1300",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87045669_99.jpg?ts=1613659437181&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Knitted polo shirt with zip",
      price: "₹1100",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87005677_58.jpg?ts=1615367105552&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Cuadrillé structure knit polo shirt",
      price: "₹950",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87075688_56_D1.jpg?ts=1612532188550&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Slim fit 100% linen polo shirt",
      price: "₹1200",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055641_01_D1.jpg?ts=1614341111500&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Cuadrillé structure knit polo shirt",
      price: "₹950",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87075688_70.jpg?ts=1613645061986&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },

    {
      name: "Cotton linen-blend polo shirt",
      price: "₹800",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87035671_CO.jpg?ts=1616418326466&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Cotton linen-blend polo shirt",
      price: "₹800",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87035671_39.jpg?ts=1616418326466&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Knit contrast trim polo shirt",
      price: "₹1200",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87055684_01.jpg?ts=1613469915675&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Printed flowy shirt",
      price: "₹5600",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17051098_52.jpg?ts=1621953708679&imwidth=556&imdensity=1",
      Description: "",
      productId: uuid(),
    },
    {
      name: "Fluid striped regular-fit shirt",
      price: "₹2100",
      src:
        "https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17051095_20.jpg?ts=1621525458109&imwidth=550&imdensity=1",
      Description: "",
      productId: uuid(),
    },
  ].map(item => ({...item, outStock: true})));
  const [ componentState, setComponentState ] = useState('test')//('loading');  



  useEffect(() =>{
    async function getProduct() {
        try {
            setComponentState('loading');
            const productRaw = await db.collection('Products')
            //.where("category", "==", categoryType)
            //.limit(3)
            .get();
            
            const products = [];
            productRaw.forEach((doc) => {
                 
                const data = doc.data();
                const index = 0;
                const product = {
                    src: data.images[index],
                    productId: doc.id,
                    name: data.name,
                    alt: data.name,
                    price: data.price[index]
                }
                products.push(product); 
            });
            setTops([...products, ...tops,])
            setComponentState('fetched')
        } catch(error) {
            setComponentState('error');
            console.error("error in product show page:: ", error);
        }
    }
  //getProduct();
}, []);


  return <Searchbar />;

  if(componentState === 'loading') {
    return <Skeleton />;
  }
  
  if(componentState === 'error') {
    return <Skeleton />;
  }

  if(componentState ==='fetched'){
    return (
      <div className="search-page">
        {tops.map(item => (<React.Fragment key={item.productId}>
          <div className="search-product">
            <ProductContainer  product={item}/>
          </div>
        </React.Fragment>))}
      </div>);
  }
  
};

export default Search;
