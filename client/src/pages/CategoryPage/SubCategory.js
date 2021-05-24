import React, { useState, useEffect } from 'react';
import ProductContainer from '../../components/ProductContainer';
import { db } from './../../config/firebaseConfig';
import './subCategory.css'

const jeans_product = 'jeans_product';
const ornaments_product = 'ornaments_product';
const saree_product = 'saree_product';

const jeans_banner = 'jeans_banner';
const ornaments_banner = 'ornaments_banner';
const saree_banner = 'saree_banner';


  // .collection("Products").where("isDeleted", "==", false)

function SubCategory(props) {
    const subCategories = ["sarees","ornaments","jeans"  ];
    const [ slides, setSlides ] = useState(subCategories)//([]);
    const [ componentState, setComponentState ] = useState('noData');

    const getProducts = async (categoryType) => {
        const productRaw = await db.collection('Products')
        .where("category", "==", categoryType)
        .limit(3)
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
        return products
    } 

    useEffect(() =>{
        async function getProduct() {
            try {
                setComponentState('loading');
                const [ sarees, ornaments, jeans ] = await Promise.all([
                    getProducts(saree_product), 
                    getProducts(ornaments_product),
                    getProducts(jeans_product),
                ])
                const products = { sarees, ornaments, jeans };
                setSlides(products);
                console.log(products);
                setComponentState('fetched')
            } catch(error) {
                setComponentState('error');
                console.error("error in product show page:: ", error);
            }
        }
       getProduct();
    }, []);


    if(componentState === "loading") {
        return <div >Loading...</div>
    }
    
    if(componentState === "noData") {
        return <div >No Data</div>
    }
    
    if(componentState === "error") {
        return <div >Something went wrong.</div>
    }

    return (
        <div className="page-width">
            {subCategories.map((item) => (
                <div className="subCategory-main">
                    <div className="subCategory-title">
                        {item}
                    </div>
                    <div className="subCategory-products">
                        {slides[item]?.map((item) => (
                            <div className="subCategory-product">
                                <ProductContainer product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SubCategory;