import React, {useState} from 'react';
import CartList from './CartList';
import CartCheckout from './CartCheckout';
import Footer from './../../components/Footer';
import emptyCartImg from './emptyCart.svg';
import './cart.css';

const product = {
    src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_804dccb4-1357-427e-95c5-60ba9325f8a8_250x.jpg?v=1617960591',
    productDetail: "/url to product page ",
    name: 'German Silver',
    price: '20',
    currency: 'in',
    alt: 'alt',
    quantity: 1,

};

const list = Array(2).fill(product);
function Cart(props) {
    const [productList, setProductList] = useState(list);
    const addonProps = { 
        productList, setProductList
    }

    const emptyCart = !productList.length; 
    
    return (
            <>
            {/* header */}
            {emptyCart && <>
                <div className='center cart-empty-list '>
                <span>You have no item in the cart</span>
                <img src={emptyCartImg} alt='empty list' className='cart-empty-img'/>
                <a href='/' >Browse Products</a>
            </div>
            </>}
            {!emptyCart && <>
            <div className="cart-container">
                <div className="cart-item-2">
                 <h1 className="cart-heading">Cart</h1>
                    <CartList {...addonProps}/>
                    <CartCheckout {...addonProps}/>
                </div>
            </div>
            </>}
            <Footer />
            </>
    );
}

export default Cart;