import React from 'react';
import helper from './helper';
import Button from './../../components/Button';
function CartCheckout(props) {

    const { productList } = props;
    

    return (
        <div className='cart-checkout-container'>
            <div className='cart-order-note'>
                <span>Add Order Note</span>
                <textarea rows="4" cols="50" placeholder='How can we help you?'></textarea>
            </div>
            <div className='cart-checkout-info'>
                <p className='total'>Total: <span>{helper.getTotalPrice(productList)}</span></p>
                <p className='total-description'>Free Shipping and Products are Inclusive of Taxes</p>
            </div>
            <div className='cart-checkout-button'>
                <div>
                    <Button label="Checkout" onClick={() => {}}/>
                </div>
            </div>
        </div>
    );
}

export default CartCheckout;