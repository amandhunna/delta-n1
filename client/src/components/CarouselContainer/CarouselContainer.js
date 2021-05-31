import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from './../../config/firebaseConfig';

import './carousel.css';

/* const testSlides  =  { 
    src:[ 
        'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/launched_now_18_1400x.jpg?v=1618036634',
        'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/BeautyPlus_20200814010950628_save_1400x.jpg?v=1597360936',
        'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/DSC05377_1400x.jpg?v=1597174470',
    ],
    productId: "HBGIUBfdafa",
    name: "this is done ",
    alt: "no image",
} */

function CarouselContainer() {
    const history = useHistory();
    // selected view of slide
    const [ slideIndex, setSlideIndex ] = useState(0);
    const [ componentState, setComponentState ] = useState('noData');
    const [ slides, setSlides] = useState([]);
    
    function newSlide(newReqIndex) {
        const newSlideIndex = slideIndex + newReqIndex;
        showSlides(newSlideIndex);
    }
    
    function currentSlide(newIndex) {
        showSlides(newIndex);
    }
    
    function showSlides(slideIndex) {
        const index = slideIndex % (slides?.src?.length || 0);
        setSlideIndex(index);
    }

    useEffect(() =>{
        async function getProduct() {
            try {
                setComponentState('loading');
                const productRaw = await db
                    .collection('Products')
                    .where("category", "==", "saree_banner")
                    .limit(1)
                    .get();
                

                const product = [];
                productRaw.forEach((doc) => {
                     
                    const data = doc.data();
                  //  const index = 0;
                    const object = {
                        src: data.images,
                        productId: doc.id,
                        name: data.name,
                        alt: data.name,
                    }
                    product.push(object); 
                });

                setSlides(product[0]);
                setComponentState('fetched')
            } catch(error) {
                setComponentState('error');
                console.error("error in product show page:: ", error);
            }
        }
      getProduct();
    }, []);
    
    if(componentState === 'loading') {
        return <div>Loading...</div>
    }

    if(componentState === 'error') {
        return <div>Something went wrong...</div>
    }

    if(componentState === 'noData') {
        return <div>No data</div>
    }

    return (
        <div className="image-slider">
            <div className="image-slider-container">
                {slides.src.map((item,index) => (
                    <div key={item + index} 
                        className={`image-slider-mySlides image-slider-fade ${index === slideIndex? 'image-slider-active': ''}`}
                        onClick={() => {history.push(`/product/${slides.productId}`)}}
                        >
                        <img className="image-slider-aspect-ratio" src={item} alt={"no image"} style={{width:"100%"}}/>
                        <div className="image-slider-text">{slides.name}</div>
                    </div>
                ))}


                <button className="image-slider-prev" onClick={() => newSlide(-1)}>&#10094;</button>
                <button className="image-slider-next" onClick={() => newSlide(1)}>&#10095;</button>

            </div>
            
            <div className="image-slider-dots">
                {slides.src.map((_, index) => (
                    <span className={`image-slider-dot ${index === slideIndex ? "image-slider-dot-active" : ""}`} key={"currentSlide"+ index} onClick={() => currentSlide(index)}></span>
                ))}
            </div>
        </div>
    );
}

export default CarouselContainer;