import React from 'react';
import './CartItem.css';
import { colorList } from './colorList';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.itemPricer = this.itemPricer.bind(this);
    }

    itemPricer = (color, quantity) => {
        for (let i = 0; i < colorList.length; i++) {
            if (colorList[i].name == color) {
                return (colorList[i].price * quantity)
            }
        }
    }

    render() {

        return(
            <div className='cartItemWrapper'>
                <div className='cartItemName'>{this.props.name}</div>
                <div className='cartItemQuantity'>{this.props.quantity}</div>
                <div className='cartItemPrice'>${this.itemPricer(this.props.name, this.props.quantity)}</div>
            </div>
        )
    }
}

export default CartItem