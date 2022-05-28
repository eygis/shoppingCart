import React from "react";
import { Link } from 'react-router-dom';

const Shop = () => {
    
    return (
        <div id='wrapper'>
            <div className="banner">
                <h1>The Color Store</h1>
                <div className='linksDiv'>
                <Link to='/'><div className="link">Home</div></Link>
                <Link to='/shop'><div className="link">Shop</div></Link>
                    <div className="link">Cart</div>
                </div>
            </div>
            <div id='shopContent'>
                shop
            </div>
        </div>
    );
};

export default Shop;