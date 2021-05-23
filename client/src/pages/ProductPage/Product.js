import React , { useState, useEffect } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import { db } from './../../config/firebaseConfig';
import './product.css';


const productDefault = {
    images:[],
    sizes:[],
    title:"",
    price: '',
    description: ""
};


function Product(props) {
    const { match = {} } = props;
    const { productId } = match.param || {};
    const [productDetails, setProductDetails ] = useState({});
    const [componentState, setComponentState] = useState('noData')
    const [ slideIndex, setSlideIndex ] = useState(0);
    const [ quantity, setQuantity ] = useState(1);
    const [ addToWishlist, setaddToWishlist ] = useState(false);
    const [ selectedSize, setselectedSize ] = useState(false);

    
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

    function update (type) {
        if(type === 'increase') {
            setQuantity(quantity+1); 
        }
        if(type === 'decrease') {
            if(quantity>1)
                setQuantity(quantity-1);  
        }
    };


    useEffect(() => {
        async function getProduct() {
            try {
                setComponentState('loading')
                const snapshot = await db.collection('Products').doc('Nfb7JL7bWQcz2gPEzFVk').get();
                if (snapshot.empty) {
                    console.log('here inseode')
                    console.log('No matching documents.');
                    setComponentState('noData')
                    return;
                }
                const index = 0;
                const data = snapshot.data();
                console.log('here', data)
                const  product = {
                    images: data.images,
                    sizes: data.size,
                    title: data.name,
                    price: data.price[index],
                    description: data.description || '',
                    productId: snapshot.id
                }
                console.log("productsss", product)
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

    console.log("pr", productDetails);
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

                    <div className="product-title"> {productDetails.title} <HeartFill className={`product-wishlist-btn ${addToWishlist ? 'product-wishlistAdded':''}`} onClick={()=> setaddToWishlist(!addToWishlist)}></HeartFill></div>

                    <div className="product-size">
                            {productDetails.sizes.map((item,index) => (
                                <div key={item + index} className={`product-size-child ${item === selectedSize? 'product-size-child-selected': ''}`} onClick={()=> setselectedSize(item) }>
                                    {item}
                                </div>
                            ))}
                    </div>

                    <div className="product-price">{'\u20B9'} {productDetails.price}</div>

                    <div className="product-quantity-container">
                        <button onClick={() => update('decrease')}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => update('increase')}>+</button>
                    </div>

                    <div className="product-btn-container">
                        <div className="product-addtocart-btn">
                            <span>ADD TO CART</span>
                        </div>
                        <div className="product-buyitnow-btn">
                            <span>BUY IT NOW</span>
                        </div>
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