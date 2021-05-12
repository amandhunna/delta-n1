import React from 'react';
import SubCategory from './SubCategory';
import CarouselContainer from '../../components/CarouselContainer';


function ProductPage() {
    return (
            <>
            {/* header */}

            <div>
                <CarouselContainer debug={true}/>
            </div>


            <div>
                <SubCategory debug={true}/>
            </div>
            {/* Footer */}
            </>
    );
}

export default ProductPage;