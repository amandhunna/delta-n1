import React, { useState } from 'react';
import './imageSlider.css';

const testSlides = [
    { src: 'https://picsum.photos/200/300',caption: 'Caption Text1', alt:'no Image'},
    { src: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',caption: 'Caption Text2', alt:'no Image'},
    { src: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',caption: 'Caption Text3', alt:'no Image'},
]

function ImageSlider(props) {
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
                        <div className="image-slider-numberText">{index + 1}/{slides.length}</div>
                        <img src={item.src} alt={item.alt} style={{width:"100%"}}/>
                        <div className="image-slider-text">{item.caption}</div>
                    </div>
                ))}


                <button className="image-slider-prev" onClick={() => newSlide(-1)}>&#10094;</button>
                <button className="image-slider-next" onClick={() => newSlide(1)}>&#10095;</button>

            </div>
            
            <div className="image-slider-dots">
                {slides.map((_, index) => (<span className="image-slider-dot" key={"currentSlide"+ index} onClick={() => currentSlide(index)}></span>))}
            </div>
        </div>
    );
}

export default ImageSlider;