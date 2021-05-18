import React , { useState } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import './product.css';


const productDetails = {
    images:[
        { src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/launched_now_18_1400x.jpg?v=1618036634',caption: 'Caption Text1', alt:'no Image'},
        { src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/BeautyPlus_20200814010950628_save_1400x.jpg?v=1597360936',caption: 'Caption Text2', alt:'no Image'},
        { src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/DSC05377_1400x.jpg?v=1597174470',caption: 'Caption Text3', alt:'no Image'}
    ],
    sizes:["S","M","L"],
    title:"Handloom Cotton Resham with Woven Sequined Palla",
    price:2000,
    description: "Material: High-quality oxidized german silver metal Weight: 128.62 gms approx. Size: Adjustable Color: Oxidized silver .. Disclaimer: This product has been handcrafted and hence may have slight irregularities in its color or embellishments. These imperfections are not defect per se, but a testimony of human involvement in the process and is the reason that makes each piece unique Material: High-quality oxidized german silver metal Weight: 128.62 gms approx. Size: Adjustable Color: Oxidized silver .. Disclaimer: This product has been handcrafted and hence may have slight irregularities in its color or embellishments. These imperfections are not defect per se, but a testimony of human involvement in the process and is the reason that makes each piece unique Material: High-quality oxidized german silver metal Weight: 128.62 gms approx. Size: Adjustable Color: Oxidized silver .. Disclaimer: This product has been handcrafted and hence may have slight irregularities in its color or embellishments. These imperfections are not defect per se, but a testimony of human involvement in the process and is the reason that makes each piece unique     Material: High-quality oxidized german silver metal Weight: 128.62 gms approx. Size: Adjustable Color: Oxidized silver .. Disclaimer: This product has been handcrafted and hence may have slight irregularities in its color or embellishments. These imperfections are not defect per se, but a testimony of human involvement in the process and is the reason that makes each piece unique"
};


function Product(props) {

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

    return (
        <div className="page-width">
            <div className="product-main">

                <div className="product-imageSlider-main">
                    <div className="product-slider">
                        <div className="product-slider-images-preview">
                            {productDetails.images.map((item, index) => (
                                <img className={`product-slider-small-images ${index === slideIndex ? "product-slider-small-images-active" : ""}`}  src={item.src} alt={item.alt} key={"currentSlide"+ index} onClick={() => currentSlide(index)}/>
                            ))}
                        </div>

                        <div className="product-slider-container">
                            {productDetails.images.map((item,index) => (
                                <div key={item.src + index} className={`product-slider-mySlides product-slider-fade ${index === slideIndex? 'product-slider-active': ''}`}>
                                    <img className="product-slider-aspect-ratio" src={item.src} alt={item.alt} style={{width:"100%"}}/>
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