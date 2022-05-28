import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.numberValue = React.createRef();
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart = () => {
       let value = this.numberValue.current.value
       if (!value) return;
       this.props.updateState(this.props.name, value);
    }

    render() {

        return (
            <div className='itemWrapper'>
                <div className='itemTitle'>
                    <p>{this.props.name}</p>
                </div>
                <div>
                    <img className='itemPicture' src={this.props.source}></img>
                </div>
                <div className='itemPrice'>
                    <p>${this.props.price}</p>
                </div>
                <div className='addToCart'>
                    <span><input ref={this.numberValue} className='numberInput' type='number' min='1' max='99'></input></span><div className='addToCartButton' onClick={this.addToCart}>Add To Cart</div>
                </div>
            </div>
        )
    }
}

export default Item