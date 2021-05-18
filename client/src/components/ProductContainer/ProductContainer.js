import React from 'react';
import './product_container.css';
import { Search } from 'react-bootstrap-icons';




function ProductContainer(props) {

    let { product } = props;

    return (
        <div className="productContainer-main">
            <div className="productContainer-imageMain">
                <div className="productContainer-image" style={{backgroundImage: `url(${product.url})`}}></div>
                <div className="productContainer-button"><a href="#sample"> <Search/> View Product </a></div>
                <div className="productContainer-overlay"></div>
            </div>
            
            <div className="productContainer-title">{product.title}</div>
            <div className="productContainer-price">{product.price}</div>
        </div>
    );
}

export default ProductContainer;