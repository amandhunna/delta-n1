import CarouselContainer from './components/CarouselContainer';
import FooterContainter from './components/Footer/FooterContainer';
import HomepageCategories from './components/HomepageCategories';

function TestComponent() {
    const {REACT_APP_TEST_COMPONENTS, REACT_APP_REACT_ENV}  = process.env;
  return (
    <div> 
	    <CarouselContainer debug={true}/>
	    <FooterContainter />
      <HomepageCategories />
    </div>
  );
}

export default TestComponent;
