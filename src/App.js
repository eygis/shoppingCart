import React from "react";
import { Link } from 'react-router-dom';
import './App.css'

class App extends React.Component {
    
    render() {

        return (
            <div id='wrapper'>
                <div className="banner">
                    <h1>The Color Store</h1>
                    <div className='linksDiv'>
                    <Link to='/'><div className="link">Home</div></Link>
                    <Link to='/shop'><div className="link">Shop</div></Link>
                    <Link to='/cart'><div className="link">Cart{this.props.currentTotal && `(${this.props.currentTotal})`}</div></Link>
                    </div>
                </div>
                <div id='homeContent'>
                    <div id='homeMain'>
                        <p id='greeting'>Welcome to the Color Store!</p>
                        <p id='mainMessage'>Here you can purchase any of our various colors that we have on offer. Please peruse our Shop page 
                        and choose any color that you like!
                        </p>

                    </div>
                </div>
            </div>
        );
    }
};

export default App;