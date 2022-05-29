import React from "react";
import { Link } from 'react-router-dom';
import Item from './Item.js'
import { colorList } from "./colorList.js";

class Shop extends React.Component {
    
    render() {
        return (
            <div id='wrapper'>
                <div className="banner">
                    <h1>The Color Store</h1>
                    <div className='linksDiv'>
                    <Link to='/'><div className="link">Home</div></Link>
                    <Link to='/shop'><div className="link">Shop</div></Link>
                    <Link to='/cart'><div className="link">Cart{(this.props.currentTotal > 0) && `(${this.props.currentTotal})`}</div></Link>
                    </div>
                </div>
                <div id='shopContent'>
                    {colorList.map(color => {
                        return <Item name={color.name} source={color.source} price={color.price} key={color.name} updateState={this.props.updateState} />
                    })}
                </div>
            </div>
        );
    }
};

export default Shop;