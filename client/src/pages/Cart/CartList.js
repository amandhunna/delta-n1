import React, { useState, useEffect } from 'react';
import helper from './helper';

const product = {
    src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_804dccb4-1357-427e-95c5-60ba9325f8a8_250x.jpg?v=1617960591',
    productDetail: "/url to product page ",
    name: 'German Silver',
    price: '20',
    currency: 'in',
    alt: 'alt',
    quantity: 1,

};

const list = Array(3).fill(product);


function Quantity(props) {
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
        <div className="quantity-container">
            <button onClick={() => update('decrease')}>-</button>
            <span>{quantity}</span>
            <button onClick={() => update('increase')}>+</button>
        </div>
    );
};

function CartList(props) {
   /*  const [countArr, setCountArr] = useState([]) */
    const [productList, setProductList] = useState(list);

    function removeItem(index) {
        const tempData = helper.deepClone(productList);
        tempData.splice(index,1);
        setProductList(tempData)
    }

/*     useEffect(() => {
        const listLength = list.length;
        const countListArr = Array(listLength).fill(1);
        setCountArr(countListArr);
    }, []); */


    return (
        <div className="cart-list">
        {productList.map((item,index) => (<>
            <div className="cart-item">
                <span className="cart-item-img">
                    <img src={item.src} className="thumbnails" alt={item.alt}/>
                </span>
                <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{helper.getPrice(item.currency, item.price)}</span>
                    <Quantity quantity={item.quantity} setProductList={setProductList} index={index} />
                </div> 
                <button className="cart-remove" onClick={() => removeItem(index)}>Remove</button>
            </div>
        </>))}
            
        </div>
    );
}

export default CartList;