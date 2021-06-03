import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import helper from './helper';
import Button from './../../components/Button';
import { useStateValue } from './../../context/StateProvider';
import { db } from './../../config/firebaseConfig';
import emptyWishList from './emptyWishList.svg' 
import './wishlist.css';

// src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_804dccb4-1357-427e-95c5-60ba9325f8a8_250x.jpg?v=1617960591',

function Wishlist(props) {
    const history = useHistory();
    const [{ user:currentUser }, dispatch] = useStateValue() || [{}];
    const [ componentState, setComponentState] = useState('noData')
    const [ wishlist, setWishlist] = useState([])
    
    async function removeItemFromListState(index, productId) {

        const currentUserId = currentUser?.id;
        if(!currentUserId) {
            setComponentState('noUser');
            return;
        }
        helper.removeItemFromListState(index, wishlist, setWishlist, setComponentState);
       
       // await db.collection('Users').doc(currentUserId).set({ wishlist: newWishlist}, { merge: true } );
        // await db.collection('Users').doc(currentUserId).set({ wishlist: newWishlist}, { merge: true } );
    }

    
    useEffect(() => {
        async function updateWishlist() {
            if(componentState === 'update') {
                const currentUserId = currentUser?.id;
                await db.collection('Users').doc(currentUserId).set({ wishlist: wishlist.map(item => item.productId)}, { merge: true } );
                setComponentState(!!wishlist.length? 'updated': 'noData');
            }
        };
        updateWishlist();
    }, [componentState])



    useEffect(() => {
        async function getProduct() {
            try {
                const currentUserId = currentUser?.id;
                console.log(currentUserId);
                if(!currentUserId) {
                    setComponentState('noUser')
                    return;
                }
                setComponentState('loading');
                const snapshot = await db.collection('Users').doc(currentUserId).get();
                if (snapshot.empty) {
                    setComponentState('noData');
                    return;
                }
                const index = 0;
                const data = snapshot.data();
                
                if (data == undefined) {
                    setComponentState('noData');
                    return;
                }

                const wishlistIds = data.wishlist
               
                if (!wishlistIds.length) {
                    setComponentState('noData');
                    return;
                }

                const wishlistProductsRaw = await Promise.all(wishlistIds
                    .map(item => db.collection('Products').doc(item).get()));
                

                const wishlistProducts = wishlistProductsRaw.map(item => ({...item.data(), id: item.id}));
                console.log("-------", wishlistProducts);

                const products = [];
                wishlistProducts.forEach((wishlistProducts,index) => {
                    const  product = {
                        src: wishlistProducts.images[0],
                        productDetail: "/url to product page ",
                        name: wishlistProducts.name,
                        price: wishlistProducts.price[0],
                        currency: 'in',
                        alt: wishlistProducts.name,
                        productId: wishlistProducts.id
                    }
                    products.push(product);
                })
                setWishlist(products);
                console.log("product fetch:", products);

                setComponentState('fetched')
            } catch(error) {
                console.error("error in the get product:: ", error);
                setComponentState('error');
            }
        }
      getProduct(); 
    }, []);


    let renderME = "Let me decide..."

    
    if(componentState === 'noUser') {
        renderME = <div>No user found, please login</div>
    }

    if(componentState === 'update') {
        renderME = <div>Updating the wishlist, please wait!</div>
    }



    if(componentState === 'loading') {
        renderME = <div>Loading...</div>
    }

    if(componentState === 'noData') {
        renderME =   <>
            <div className='center wishlist-empty-list '>
                <span>You have no item in the wishlist</span>
                <img src={emptyWishList} alt='empty list' className='wishlist-empty-img'/>
                <a href='/' >Browse Products</a>
            </div>
            </>;
    }

    if(componentState === 'fetched' || componentState === 'updated') {
        renderME =  wishlist.map((item,index) => (
            <div className="wishlist-item-container">
                <div className="wishlist-item-1 wishlist-item-img">
                    <img src={item.src} className="wishlist-thumbnails" alt={item.alt}/>
                    <button className="wishlist-quick-view center" onClick={() => history.push(`/product/${item.productId}`)}>
                        <Search /> 
                        <span>Quick View</span>
                    </button>
                </div>
                <div className="wishlist-item-2">
                    <p className="wishlist-product-name">{item.name}</p>
                    <div>
                        <p className="wishlist-item-price">{helper.getPrice(item.currency, item.price)}</p>
                        <Button onClick={() => {}} label='Add to Cart' />
                    </div>
                </div>
                <button className="wishlist-remove-item" onClick={() => removeItemFromListState(index,item.productId)}>x</button>
            </div>))
    }

    return (
        <div className='wishlist-page'>
            {renderME}
        </div>
    );
}

export default Wishlist;