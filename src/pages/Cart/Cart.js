import React, {useEffect, useState} from 'react';
import CartList from './CartList';
import CartCheckout from './CartCheckout';
import emptyCartImg from './emptyCart.svg';
import { db } from './../../config/firebaseConfig'
import { useStateValue } from './../../context/StateProvider';
import SkeletonLoader from './../../components/Skeleton';
import noUser from './noUser.svg';
import './cart.css';

function Cart() {
    const [productList, setProductList] = useState([]);
    const [cartId, setCartId] = useState('');
    const [{ user:currentUser }] = useStateValue() || [{}];
    const [ componentState, setComponentState] = useState('loading');
    const addonProps = { 
        productList, setProductList,setComponentState
    }

    const emptyCart = !productList.length;

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

                    await db.collection('Orders').doc(cartId).set({ productIds, productQuantity }, { merge: true } );
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
                setComponentState('error')
                return;
            }

            
            try {
                const currentUserId =currentUser?.id;
                if(!currentUserId) {
                    setComponentState('noUser');
                    return;
                }

                const activeOrder = `CART_${currentUserId}`;
                const cartListRaw = await db.collection("Orders")
                .where("status_userId", "==", activeOrder).get();
                console.log("activeOrder",activeOrder )
                const cartList = [];
                cartListRaw.forEach((doc) => {
                    cartList.push(doc.data());
                    setCartId(doc.id)
                });

                if(!cartList.length) {
                    setComponentState('noData')
                    return
                }
                const { productIds, productQuantity } = cartList[0];

                const cartProductListRaw = await Promise.all(productIds
                    .map(item => db.collection('Products').doc(item).get()));


                const productList = cartProductListRaw.map(item => item.data());
                    const cartProductList = []
                productList.forEach((data, index = 0) => {
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
                    // console.log("object", object);
                    cartProductList.push(object); 
    
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
        return <SkeletonLoader />
    }

    if(componentState === 'error') {
        return <div className='center'>Something went wrong.</div>
    }

    if(componentState === 'noUser') {
        return <>
            <div className='center wishlist-empty-list '>
                <span>Please login to view your Cart</span>
                <img src={noUser} alt='empty list' className='wishlist-empty-img'/>
            </div>
        
        </>
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
