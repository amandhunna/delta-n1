import React , { useState, useEffect } from 'react';
import admin from 'firebase-admin';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { db } from './../../config/firebaseConfig';
import { useStateValue } from './../../context/StateProvider';
import './product.css';

// const currentUser = {
//     id: 'bfyyAae3HQYj8o4uXypD', //'j54EipobSWRnDqSfLMmcIpJ1Z3E2';  
// };

function Product(props) {
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
            // console.warn("HARD CODED CURRENT USER ID");
            const currentUserId = currentUser?.id;
            console.log(currentUser)
        
            if(!currentUserId) {
                dispatch({
                    type: "SET_BANNER",
                    banner: {show: true, message: null},
                  })
                return;
            }
            const prevWishlist = currentUser.wishlist || []; 
            const newWishlist = [ ...[...[].concat(prevWishlist)], productId];
            console.log("00000000", currentUserId, newWishlist)
            const addResponse = await db.collection('Users').doc(currentUserId).set({ wishlist: newWishlist}, { merge: true } );
            console.log("---", addResponse);
            setIsWishlist(newValue);
        } catch (error) {
            console.error("error in wishlist:: ", error);
            setComponentState('error');
        }
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
                ///console.log("product fetch:", data, product);
                setProductDetails(product);
                setComponentState('fetched')
            } catch(error) {
                console.error("error in the get product:: ", error);
                setComponentState('error');
            }
        }
      getProduct(); 
    }, [])


    if(componentState === 'loading') {
        return <div>Loading...</div>;
    }

    
    if(componentState === 'noData') {
        return <div>No product Found</div>;
    }
    
    if(componentState === 'error') {
        return <div>Something went wrong.</div>;
    }

    return (
        <div className="page-width">
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
                        <button className="product-addtocart-btn">ADD TO CART</button>
                        <button className="product-buyitnow-btn">
                            BUY IT NOW</button>
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