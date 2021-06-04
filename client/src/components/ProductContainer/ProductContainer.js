import React from 'react';
import './product_container.css';
import { useHistory } from 'react-router-dom'
import { Search } from 'react-bootstrap-icons';




function ProductContainer(props) {
    const history = useHistory();
    let { product } = props;

    return (
        <div className="productContainer-main">
            <div className="productContainer-imageMain">
                <div className="productContainer-image" style={{backgroundImage: `url(${product.src})`}}></div>
                <div className="productContainer-button">
                    <button onClick={() => history.push(`/product/${product.productId}`)}><Search/> View Product </button>
                </div>
                <div className="productContainer-overlay"></div>
            </div>
            
            <div className="productContainer-title">{product.name}</div>
            <div className="productContainer-price">{product.price}</div>
        </div>
    );
}

export default ProductContainer;