import React from 'react';
import helper from './helper';
import Button from './../../components/Button';
import Footer from './../../components/Footer';
import './wishlist.css';

const item = {
    src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_804dccb4-1357-427e-95c5-60ba9325f8a8_250x.jpg?v=1617960591',
    productDetail: "/url to product page ",
    name: 'German Silver',
    price: '20',
    currency: 'in',
    alt: 'alt',
    quantity: 1,

};

const whishlist = Array(5).fill(item);

function Wishlist(props) {
    return (
        <div className='wishlist-page'>
            {whishlist.map(item => (<div className="wishlist-item-container">
                <div className="wishlist-item-1 wishlist-item-img">
                    <img src={item.src} className="wishlist-thumbnails" alt={item.alt}/>
                    <button className="wishlist-quick-view">
                    <i class="bi bi-search"></i> <span>Quick View</span></button>
                </div>
                <div className="wishlist-item-2">
                    <p className="wishlist-product-name">{item.name}</p>
                    <div>
                        <p className="wishlist-item-price">{helper.getPrice(item.currency, item.price)}</p>
                        <Button onClick={() => {}} label='Add to Cart' />
                    </div>
                </div>
            </div>))}
            <Footer />
        </div>
    );
}

export default Wishlist;