// import CarouselContainer from './components/CarouselContainer';
import FooterContainter from './components/Footer/FooterContainer';
// import HomepageCategories from './components/HomepageCategories';
import ProductPage from './pages/ProductPage';
import './App.css';

function TestComponent() {
    // const {REACT_APP_TEST_COMPONENTS, REACT_APP_REACT_ENV}  = process.env;
  return (
    <div> 
	    {/* <CarouselContainer debug={true}/>
	    <HomepageCategories debug={true}/>
       */}
      <ProductPage debug={true}/>
      <FooterContainter />
    </div>
  );
}

export default TestComponent;
