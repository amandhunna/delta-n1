import React from 'react';
import './subCategory.css'
import ProductContainer from '../../components/ProductContainer';



const subCategories = [
    {"categoryName":"Saree","products":[
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"}
    ]},
    {"categoryName":"Jwellery","products":[
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"}
    ]},
    {"categoryName":"Jeans","products":[
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"},{"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145","title":"Product title","price":"RS 200"}
    ]}
];


function SubCategory(props) {
    let { slides, debug } = props;
    if(debug) slides = subCategories;

    return (
        <div className="page-width">
            {slides.map((item,index) => (
                <div className="subCategory-main">
                    <div className="subCategory-title">
                        {item.categoryName}
                    </div>

                    <div className="subCategory-products">
                        {item.products.map((item1,index1) => (
                            <div className="subCategory-product">
                                <ProductContainer product={item1} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SubCategory;