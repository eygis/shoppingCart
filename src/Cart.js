import React from "react";
import { Link } from 'react-router-dom';
import './App.css'
import CartItem from './CartItem.js'
import { colorList } from "./colorList";

class Cart extends React.Component {

    cartPricer = () => {
        let totalPrice = 0;
        for (let [key, value] of Object.entries(this.props.state)) {
            if (key == 'total') continue;
            for (let i = 0; i < colorList.length; i++) {
                if (colorList[i].name == key) {
                    totalPrice += (colorList[i].price * value);
                }
            }
        }
        return totalPrice.toFixed(2);
    }

    render() {

        if (!this.props.currentTotal) {
            return(
                <div className='wrapper'>
                    <div className="banner">
                        <h1>The Color Store</h1>
                        <div className='linksDiv'>
                        <Link to='/'><div className="link">Home</div></Link>
                        <Link to='/shop'><div className="link">Shop</div></Link>
                        <Link to='/cart'><div className="link">Cart{this.props.currentTotal && `(${this.props.currentTotal})`}</div></Link>
                        </div>
                    </div>
                    <div id='cartContent'>
                        <div id='noCart'>
                            <p>Items will appear here once added to your cart from the Shop page!</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className='wrapper'>
                    <div className="banner">
                        <h1>The Color Store</h1>
                        <div className='linksDiv'>
                        <Link to='/'><div className="link">Home</div></Link>
                        <Link to='/shop'><div className="link">Shop</div></Link>
                        <Link to='/cart'><div className="link">Cart{this.props.currentTotal && `(${this.props.currentTotal})`}</div></Link>
                        </div>
                    </div>
                    <div id='cartContent'>
                        <div id='guideWrapper'>
                            <span id='guideName'>Item Name</span>
                            <span id='guideQuantity'>Item Quantity</span>
                            <span id='guidePrice'>Item Price</span>
                        </div>
                        {Object.entries(this.props.state).map(pair => {
                            if (pair[0]=='total') return 
                            return <CartItem name={pair[0]} quantity={pair[1]} key={pair[0]} /> 
                        })}
                    </div>
                    <div id='checkout'>
                        <h1>Total Price: <span className='black'>${this.cartPricer()}</span></h1>
                        <div id='checkoutButton' onClick={() => window.alert('Not Implemented! :)')}>
                            Check Out
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Cart;