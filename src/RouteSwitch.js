import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Shop from './Shop';
import Cart from './Cart'

class RouteSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: null
        }

        this.updateState = this.updateState.bind(this);
        this.childSetState = this.childSetState.bind(this);
    }

    cartTotal = () => {
        let runningCount = 0;
        Object.keys(this.state).map(key => {
            if (key == 'total') return;
            runningCount += this.state[key];
        })
        this.setState({total: runningCount});
    }

    updateState = (item, number) => {
        this.state[item] ? this.setState({[item]: (this.state[item] + parseInt(number))}, this.cartTotal) : this.setState({[item]: parseInt(number)}, this.cartTotal);
    }

    childSetState = (newState) => {
        this.setState(newState);
        this.cartTotal();
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App currentTotal={this.state.total} />} />
                    <Route path='/shop' element={<Shop updateState={this.updateState} currentTotal={this.state.total} />} />
                    <Route path='/cart' element={<Cart currentTotal={this.state.total} state={this.state} childSetState={this.childSetState}/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default RouteSwitch