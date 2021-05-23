import React, {useEffect, useState} from 'react';
import CartList from './CartList';
import CartCheckout from './CartCheckout';
import Footer from './../../components/Footer';
import emptyCartImg from './emptyCart.svg';
import { db } from './../../config/firebaseConfig'
import './cart.css';


const product = {
    src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_804dccb4-1357-427e-95c5-60ba9325f8a8_250x.jpg?v=1617960591',
    productDetail: "/url to product page ",
    name: 'German Silver',
    price: '20',
    currency: 'in',
    alt: 'alt',
    quantity: 1,

};

const list = Array(2).fill(product);
function Cart() {
    const [productList, setProductList] = useState(list);
    const [ componentState, setComponentState] = useState('loading');
    const addonProps = { 
        productList, setProductList
    }

    const emptyCart = !productList.length; 

    useEffect(() =>{
        async function getCartList() {
            if(!db) {
                console.log('db not found', db)
                return;
            }
            try {
                const cartListRaw = await db.collection('Orders').get();
                const cartList = [];
                cartListRaw.forEach((doc) => {
                    // console.log("doc data", doc.data());
                    cartList.push(doc.data()); 
                });

                const cartProductListRaw = await db.collection('Products').get();
                const cartProductList = [];
                cartProductListRaw.forEach((doc) => {
                     
                    // console.log("product doc data", doc.data());
                    const data = doc.data();
                    const index = 0;
                    const object = {
                        src: data.images[index],
                        productDetail: doc.id,
                        inStock: data.inStock[0],
                        name: data.name,
                        price:data.price[index],
                        currency: 'in',
                        alt: data.name,
                        quantity: 1,
                    }
                    cartProductList.push(object); 
                    console.log("obkect", cartProductList, list);
                });

                setProductList(cartProductList);
                setComponentState('fetched')
            } catch (error) {
                setComponentState('error')
                console.error("error in cart list fetch :: ",error);
            }
        }
        getCartList();

    },[])

    if(componentState === 'loading') {
        return <div>Loading...</div>
    }

    if(componentState === 'error') {
        return <div>Something went wrong.</div>
    }
    
    return (
            <>
            {/* header */}
            {emptyCart && <>
                <div className='center cart-empty-list '>
                <span>You have no item in the cart</span>
                <img src={emptyCartImg} alt='empty list' className='cart-empty-img'/>
                <a href='/' >Browse Products</a>
            </div>
            </>}
            {!emptyCart && <>
            <div className="cart-container">
                <div className="cart-item-2">
                 <h1 className="cart-heading">Cart</h1>
                    <CartList {...addonProps}/>
                    <CartCheckout {...addonProps}/>
                </div>
            </div>
            </>}
            <Footer />
            </>
    );
}

export default Cart;