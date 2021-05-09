import React from 'react';
import Product from './Product';

function ProductPage() {
    return (
            <>
            {/* header */}
            <div>
                <Product debug={true}/>
            </div>
            {/* Footer */}
            </>
    );
}

export default ProductPage;