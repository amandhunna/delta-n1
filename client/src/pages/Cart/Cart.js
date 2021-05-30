import React, {useEffect, useState} from 'react';
import CartList from './CartList';
import CartCheckout from './CartCheckout';
import emptyCartImg from './emptyCart.svg';
import { db } from './../../config/firebaseConfig'
import './cart.css';

const currentUser = {
    id: 'bfyyAae3HQYj8o4uXypD', //'j54EipobSWRnDqSfLMmcIpJ1Z3E2'; 
    activeOrder: '3z6vyIIHE57gNzdOXEAQ'
};

// const product = {
//     src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_804dccb4-1357-427e-95c5-60ba9325f8a8_250x.jpg?v=1617960591',
//     productDetail: "/url to product page ",
//     name: 'German Silver',
//     price: '20',
//     currency: 'in',
//     alt: 'alt',
//     quantity: 1,
// 
// };

 const list = Array(2).fill([]);
function Cart() {
    const [productList, setProductList] = useState([]);
    const [ componentState, setComponentState] = useState('loading');
    const addonProps = { 
        productList, setProductList,setComponentState
    }

    const emptyCart = !productList.length; 


/*     async function onClickWishlist(e) {
        e.preventDefault();
        try {

            const newValue = !isWishlist;
            console.warn("HARD CODED CURRENT USER ID");
            const currentUserId = currentUser.id; //'j54EipobSWRnDqSfLMmcIpJ1Z3E2'; 
            const wishlist = currentUser.wishlist; 
            const newWishlist = [ ...[...[].concat(wishlist)], productId];

            const addResponse = await db.collection('Users').doc(currentUserId).set({ wishlist: newWishlist}, { merge: true } );
            console.log("---", addResponse);
            setIsWishlist(newValue);
        } catch (error) {
            console.error("error in wishlist:: ", error);
            setComponentState('error');
        }
    } */

    useEffect(() => {
        async function updateCart() {
            if(componentState === 'update') {
                try {
                    const  productIds =  [];
                    const productQuantity = [];
                    productList.forEach((item) => {
                        productIds.push(item.productDetail);
                        productQuantity.push(item.quantity);
                    });
                    // console.log("---productList---", productIds, productQuantity);        
                    console.warn("HARD CODED CURRENT USER ID");
                    const activeOrder = currentUser.activeOrder;
                    const updateResponse = await db.collection('Orders').doc(activeOrder).set({ productIds, productQuantity }, { merge: true } );
                    console.log("updateResponse", updateResponse);
                    setComponentState('updated');
                } catch (error) {
                    console.error("error in cart update:: ", error);
                    setComponentState('error');
                }
            }
        }
        updateCart();
    }, [productList]);

    useEffect(() =>{
        async function getCartList() {
            if(!db) {
                console.log('db not found', db)
                return;
            }
            try {
                const cartListRaw = await db.collection("Orders")
                .where("status_userId", "==", "CART_j54EipobSWRnDqSfLMmcIpJ1Z3E2").get();
                const cartList = [];
                cartListRaw.forEach((doc) => {
                    // console.log("doc data", doc.data());
                    cartList.push(doc.data()); 
                });
                const { productIds, productQuantity } = cartList[0];
                console.log("--cartListRaw----",cartList)

                const cartProductListRaw = await Promise.all(productIds
                    .map(item => db.collection('Products').doc(item).get()));


                const productList = cartProductListRaw.map(item => item.data());
                    const cartProductList = []
                productList.forEach((data, index = 0) => {
                    console.log("--data--", data)
                    const object = {
                        src: data.images[0],
                        productDetail: productIds[0],
                        inStock: data.inStock[0],
                        name: data.name,
                        price:data.price[0],
                        currency: 'in',
                        alt: data.name,
                        quantity: productQuantity[index],
                    }
                    // console.log("cardProduct", cartProductList);
                    console.log("object", object);
                    cartProductList.push(object); 
    
                });
                console.log("(=")
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
            </>
    );
}

export default Cart;