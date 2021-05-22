import React from 'react';
import pageNotFound from './404.svg';
import './404.css'

function PageNotFound(props) {
    return (
        <div className="center pageNotFound">
            <span>You have landed on the unknown page</span>
            <img src={pageNotFound} alt='Page not found' className='pageNotFound-img'/>
            <a href='/' >Go back to home</a>
        </div>);

}

export default PageNotFound;