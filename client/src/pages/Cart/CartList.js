import React from 'react';
import QuantityCounter from './../../components/QuantityCounter';
import helper from './helper';




function CartList(props) {
    const { productList, setProductList } = props; 

    function removeItem(index) {
        const tempData = helper.deepClone(productList);
        tempData.splice(index,1);
        setProductList(tempData)
    }

    return (
        <div className="cart-list">
            <div className="cart-item-header">
              <div>Products</div>
              <div></div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
        {productList.map((item,index) => (<>
            <div className="cart-item-container">
                <span className="cart-item-img">
                    <img src={item.src} className="thumbnails" alt={item.alt}/>
                </span>
                <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{helper.getPrice(item.currency, item.price)}</span>
                </div> 
                <div className="quantity-container">
                    <QuantityCounter quantity={item.quantity} setProductList={setProductList} index={index} />
                </div>
                <div className="cart-remove-wishlist">
                    <button className="cart-remove" onClick={() => removeItem(index)}><span>Remove</span></button>
                    <button className="cart-wishlist" onClick={() =>{}}>Add to Wishlist</button>
                </div>
                <div className='center cart-item-total center'> {helper.getTotalPrice(item)}</div>
            </div>
        </>))}
            
        </div>
    );
}

export default CartList;