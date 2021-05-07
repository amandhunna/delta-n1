import React from 'react';
import BaseHelper from './../../helper/BaseHelper'
import './quantityCounter.css'

const helper = new BaseHelper();

function QuantityCounter (props) {
    const { quantity, setProductList, index } = props;

    function update (type) {
        setProductList(prev => { 
            const tempData = helper.deepClone(prev);
            if(type === 'increase') {
                tempData[index].quantity++;  
            }
            if(type === 'decrease') {
                tempData[index].quantity--;  
            }
            return tempData;
        });
    };

    return (
        <div className="quantityCounter-container center">
            <div className="quantity-item">
                <button style={{ letterSpacing: '-0.1rem'}}onClick={() => update('decrease')}>--</button>
                <span>{quantity}</span>
                <button onClick={() => update('increase')}>+</button>
            </div>
        </div>
    );
};

export default QuantityCounter;
