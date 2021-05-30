import React from 'react';
import Product from './Product';
function ProductPage(props) {
    return (
            <>
            <div>
                <Product {...props}/>
            </div>
            </>
    );
}

export default ProductPage;