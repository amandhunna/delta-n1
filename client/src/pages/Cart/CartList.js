import React from 'react';

const list = [{
    src: 'https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_804dccb4-1357-427e-95c5-60ba9325f8a8_250x.jpg?v=1617960591',
    name: 'German Silver',
    price: '20',
    currency: 'in',
    quantity: 1,
    alt: 'alt'

}]

function CartList(props) {
    return (
        <div>
        {list.map(item => (<>
            <figure className="aspect-ratio">
                <img src={item.src} alt={item.alt}/>
                <figcaption>{item.name}</figcaption>
            </figure>
        </>))}
            
        </div>
    );
}

export default CartList;