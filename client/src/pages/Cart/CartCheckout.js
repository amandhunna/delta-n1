import React from 'react';
import helper from './helper';

function CartCheckout(props) {

    const { productList } = props;
    
    const getTotalPrice = () => {
        const totalPrice = productList.reduce(
            (acc, curr) => acc + parseInt(curr.price, 10)* parseInt(curr.quantity, 10), 0);
            
        /* assuming every price will be in same currency */
        const currencyType = productList[0].currency;
        const currencyPrice = helper.getPrice(currencyType, totalPrice);
        return currencyPrice;
    }

    return (
        <div className='cart-checkout-container'>
            <div className='cart-order-note'>
                <span>Add Order Note</span>
                <textarea rows="4" cols="50" placeholder='How can we help you?'></textarea>
            </div>
            <div className='cart-checkout-info'>
                <p className='total'>Total: <span>{getTotalPrice()}</span></p>
                <p className='total-description'>Free Shipping and Products are Inclusive of Taxes</p>
            </div>
            <div className='cart-checkout-button'>
                <button>Checkout</button>
            </div>
        </div>
    );
}

export default CartCheckout;