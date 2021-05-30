import React from 'react';
import SubCategory from './SubCategory';
import CarouselContainer from '../../components/CarouselContainer';

function ProductPage() {
    return (
            <>
            <div>
              <CarouselContainer />
            </div>
            <div>
                <SubCategory/>
            </div>
            </>
    );
}

export default ProductPage;