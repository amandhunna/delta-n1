import React, { useState } from 'react';
import './carousel.css';

const testSlides = [
    { src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/launched_now_18_1400x.jpg?v=1618036634',caption: 'Caption Text1', alt:'no Image'},
    { src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/BeautyPlus_20200814010950628_save_1400x.jpg?v=1597360936',caption: 'Caption Text2', alt:'no Image'},
    { src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/files/DSC05377_1400x.jpg?v=1597174470',caption: 'Caption Text3', alt:'no Image'},
]

function CarouselContainer(props) {
    let { slides, debug } = props;
    if(debug) slides = testSlides;

    // selected view of slide
    const [ slideIndex, setSlideIndex ] = useState(0);
    
    function newSlide(newReqIndex) {
        const newSlideIndex = slideIndex + newReqIndex;
        showSlides(newSlideIndex);
    }
    
    function currentSlide(newIndex) {
        showSlides(newIndex);
    }
    
    function showSlides(slideIndex) {
        let index = slideIndex;
        if(slides.length === slideIndex) index = 0;
        if(slideIndex < 0) index = slides.length -1;
        setSlideIndex(index);
    }
    
    return (
        <div className="image-slider">
            <div className="image-slider-container">
                {slides.map((item,index) => (
                    <div key={item.src + index} className={`image-slider-mySlides image-slider-fade ${index === slideIndex? 'image-slider-active': ''}`}>
                        <img className="image-slider-aspect-ratio" src={item.src} alt={item.alt} style={{width:"100%"}}/>
                        <div className="image-slider-text">{item.caption}</div>
                    </div>
                ))}


                <button className="image-slider-prev" onClick={() => newSlide(-1)}>&#10094;</button>
                <button className="image-slider-next" onClick={() => newSlide(1)}>&#10095;</button>

            </div>
            
            <div className="image-slider-dots">
                {slides.map((_, index) => (
                    <span className={`image-slider-dot ${index === slideIndex ? "image-slider-dot-active" : ""}`} key={"currentSlide"+ index} onClick={() => currentSlide(index)}></span>
                ))}
            </div>
        </div>
    );
}

export default CarouselContainer;