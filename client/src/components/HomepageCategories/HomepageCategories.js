import React from 'react';
import './homepage_categories.css';


const testSlides = [
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=1614663667","title":"A SLICE OF SPRING"},
        {"url":"https://cdn.shopify.com/s/files/1/0082/5091/6915/files/A_slice_of_Life_750x960_crop_center.jpg?v=16146636673","title":"A SLICE OF SPRING"}
];


function HomepageCategories(props) {

    let { slides, debug } = props;
    if(debug) slides = testSlides;

    return (
        <div className="page-width">
            <div className="category-spacing">
                <div className="category-heading">Trending Categories</div>
                <section className="category-main-section">
                    {slides.map((item,index) => (
                        <div className="category-card" style={{backgroundImage: `url(${item.url})`}}>
                            <div className="category-card-overlay"></div>
                            <div className="category-title-position">
                                <div className="category-title">{item.title}</div>
                            </div>
                            <div className="category-btn-position">
                                <div className="category-btn-main">
                                    <a href="" className="category-btn">VIEW PRODUCTS</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>  
            </div>
        </div>
    );
}

export default HomepageCategories;