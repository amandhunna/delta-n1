<<<<<<< HEAD
import React from 'react';
import ImageSlider from './components/ImageSlider';
=======
import CarouselContainer from './components/CarouselContainer';
import FooterContainter from './components/Footer/FooterContainer';
import HomepageCategories from './components/HomepageCategories';
import './App.css';
>>>>>>> fcf46004a5005596732a99e08bd275e58d1371c2

function TestComponent() {
  const { REACT_APP_TEST_COMPONENTS, REACT_APP_REACT_ENV } = process.env;

  return (
<<<<<<< HEAD
    <div> Test component : {REACT_APP_REACT_ENV} {REACT_APP_TEST_COMPONENTS}
      <ImageSlider debug={true}/>
=======
    <div> 
	    <CarouselContainer debug={true}/>
	    <HomepageCategories debug={true}/>
	    <FooterContainter />
>>>>>>> fcf46004a5005596732a99e08bd275e58d1371c2
    </div>
  );
}

export default TestComponent;
