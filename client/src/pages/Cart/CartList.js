import React from 'react';
import helper from './helper';



/* sub component */
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
        <div className="quantity-container center">
            <div className="quantity-item">
                <button style={{ letterSpacing: '-0.1rem'}}onClick={() => update('decrease')}>--</button>
                <span>{quantity}</span>
                <button onClick={() => update('increase')}>+</button>
            </div>
        </div>
    );
};

/* main component */
function CartList(props) {
    const { productList, setProductList } = props; 

    function removeItem(index) {
        const tempData = helper.deepClone(productList);
        tempData.splice(index,1);
        setProductList(tempData)
    }

    return (
        <div className="cart-list">
        {productList.map((item,index) => (<>
            <div className="cart-item-container">
                <span className="cart-item-img">
                    <img src={item.src} className="thumbnails" alt={item.alt}/>
                </span>
                <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{helper.getPrice(item.currency, item.price)}</span>
                </div> 
                <Quantity quantity={item.quantity} setProductList={setProductList} index={index} />
                <button className="cart-remove" onClick={() => removeItem(index)}><span>Remove</span></button>
                <div className='center cart-item-total'> {helper.getTotalPrice(item)}</div>
            </div>
        </>))}
            
        </div>
    );
}

export default CartList;