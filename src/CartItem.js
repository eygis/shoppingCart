import React from 'react';
import './CartItem.css';
import { colorList } from './colorList';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.itemPricer = this.itemPricer.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    itemPricer = (color, quantity) => {
        for (let i = 0; i < colorList.length; i++) {
            if (colorList[i].name == color) {
                return (colorList[i].price * quantity)
            }
        }
    }

    deleteItem = () => {
        let stateCopy = this.props.state;
        delete stateCopy[this.props.name];
        this.props.childSetState(stateCopy);
    }

    render() {

        return(
            <div className='cartItemWrapper'>
                <div className='cartItemName'>{this.props.name}</div>
                <div className='cartItemQuantity'>{this.props.quantity}</div>
                <div className='cartItemPrice'>${this.itemPricer(this.props.name, this.props.quantity).toFixed(2)}</div>
                <div className='delete' onClick={this.deleteItem}>X</div>
            </div>
        )
    }
}

export default CartItem