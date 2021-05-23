import React from 'react';
import Product from './Product';

function ProductPage(props) {
    return (
            <>
            {/* header */}
            <div>
                <Product {...props}/>
            </div>
            {/* Footer */}
            </>
    );
}

export default ProductPage;