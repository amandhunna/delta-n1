import React , { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { db } from './../../config/firebaseConfig';
import { useStateValue } from './../../context/StateProvider';
import './product.css';

function Product(props) {
    const history = useHistory();
    const { match = {} } = props.route || {};
    const [{ user:currentUser }, dispatch] = useStateValue() || [{}];
    const { productId } = match.params || {};
    const [ productDetails, setProductDetails ] = useState({});
    const [ componentState, setComponentState] = useState('noData')
    const [ slideIndex, setSlideIndex ] = useState(0);
    const [ isWishlist, setIsWishlist ] = useState(false);
    const [ selectedSize, setSelectedSize ] = useState(false);

    
    function newSlide(newReqIndex) {
        const newSlideIndex = slideIndex + newReqIndex;
        showSlides(newSlideIndex);
    }
    
    function currentSlide(newIndex) {
        showSlides(newIndex);
    }
    
    function showSlides(slideIndex) {
        let index = slideIndex;
        if(productDetails.images.length === slideIndex) index = 0;
        if(slideIndex < 0) index = productDetails.images.length -1;
        setSlideIndex(index);
    }

     async function onClickWishlist(e) {
        e.preventDefault();
        try {
            const newValue = !isWishlist;
            const currentUserId = currentUser?.id;
            if(!currentUserId) {
                setComponentState('noUser');
                return;
            }
            const wishlistRaw = await db.collection('Users').doc(currentUserId).get();
            const { wishlist } = wishlistRaw.data();
            const prevWishlist = wishlist || []; 
            const newWishlist = [ ...[...[].concat(prevWishlist)], productId];
            await db.collection('Users').doc(currentUserId).set({ wishlist: newWishlist}, { merge: true } );
            setIsWishlist(newValue);
        } catch (error) {
            console.error("error in wishlist:: ", error);
            setComponentState('error');
        }
    }

    function onBannerCancel() {
        setComponentState('fetched')
    }

    async function addToCart() {
        if(!currentUser?.id) {
            setComponentState('noUser');
            return;
        }

        const activeOrder = `CART_${currentUser.id}`;
        const collection = await db.collection("Orders").where("status_userId", "==", activeOrder).get();
        const cart = [];
        collection.forEach((doc) => {
           // console.log("doc data", doc.data());
            cart.push({ data: doc.data(), id: doc.id}); 
        });
        // console.log("collection", cart);
        if(cart.length) {
            cart[0].data.productIds.push(productId);
            cart[0].data.productQuantity.push(1);
            cart[0].data.sizes.push(selectedSize);
            // console.log("mew", cart)
            const docId =  cart[0].id;
            await db.collection('Orders').doc(docId).set({...cart[0].data}, { merge: true } );
        } else {
            const newData = {
                productIds: [productId],
                productQuantity: [1],
                status: "CART",
                status_userId: `CART_${currentUser.id}`,
                userId: currentUser.id,
                sizes: [selectedSize],
            }
            await db.collection('Orders').doc().set({...newData}, { merge: true } );
            // console.log("===",newData )
        }
        history.push('/cart');
    }

    useEffect(() => {
        async function getProduct() {
            try {
                if(!productId) {
                    setComponentState('noData')
                    return;
                }
                setComponentState('loading');
                const snapshot = await db.collection('Products').doc(productId).get();
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

                const  product = {
                    images: data.images,
                    sizes: data.size,
                    title: data.name,
                    price: data.price[index],
                    description: data.description || '',
                    productId: snapshot.id
                }
                setProductDetails(product);
                setComponentState('fetched')
                setSelectedSize(data.size[0])
            } catch(error) {
                console.error("error in the get product:: ", error);
                setComponentState('error');
            }
        }
      getProduct(); 
    }, [])

    let banner = '';

    if(componentState === 'loading') {
        return <div className="center">Loading...</div>;
    }

    
    if(componentState === 'noData') {
        return <div className="center">No product Found</div>;
    }
    
    if(componentState === 'error') {
        return <div className="center">Something went wrong.</div>;
    }

    if(componentState === 'noUser') {
        banner = (<>
            <div className="center banner">
                <div>
                  <span>You need to <a className = 'loginWarning 'href='/account/login'>Login</a> to perform this action</span>
                </div>
                <button className="" onClick={onBannerCancel}>x</button>
          </div>
        </>);
    }

    return (
        <div className="page-width">
            {banner}
            <div className="product-main">

                <div className="product-imageSlider-main">
                    <div className="product-slider">
                        <div className="product-slider-images-preview">
                            {productDetails.images.map((item, index) => (
                                <img className={`product-slider-small-images ${index === slideIndex ? "product-slider-small-images-active" : ""}`}  src={item} alt={productDetails.title} key={"currentSlide"+ index} onClick={() => currentSlide(index)}/>
                            ))}
                        </div>

                        <div className="product-slider-container">
                            {productDetails.images.map((item,index) => (
                                <div key={item + index} className={`product-slider-mySlides product-slider-fade ${index === slideIndex? 'product-slider-active': ''}`}>
                                    <img className="product-slider-aspect-ratio" src={item} alt={productDetails.title} style={{width:"100%"}}/>
                                </div>
                            ))}
                            <button className="product-slider-prev" onClick={() => newSlide(-1)}>&#10094;</button>
                            <button className="product-slider-next" onClick={() => newSlide(1)}>&#10095;</button>
                        </div>
                    </div>
                </div>

                <div className="product-description-main">

                    <div className="product-title"> <span>{productDetails.title}</span> 
                        {!isWishlist && <Heart className={`product-wishlist-btn`} onClick={onClickWishlist}></Heart>}
                        {isWishlist && <HeartFill className={`product-wishlist-btn`} onClick={onClickWishlist}></HeartFill>}
                    </div>

                    <div className="product-size">
                            {productDetails.sizes.map((item,index) => (
                                <div key={item + index} className={`product-size-child ${item === selectedSize? 'product-size-child-selected': ''}`} onClick={()=> setSelectedSize(item) }>
                                    {item}
                                </div>
                            ))}
                    </div>

                    <div className="product-price">{'\u20B9'} {productDetails.price}</div>

                    <div className="product-btn-container">
                        <button className="product-addtocart-btn" onClick={()=> addToCart()}>ADD TO CART</button>
                        {/* <button className="product-buyitnow-btn">BUY IT NOW</button> */}
                    </div>    

                    <div className="product-description">
                        {productDetails.description}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Product;