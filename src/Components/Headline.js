import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Headline extends Component {
    render() {
        return (

            <div className="container center">
                <nav className="menu">
                    <h1 className="menu__logo">Pet Compass</h1>
                    <Popup trigger={<button className="menu__about-us"></button>} modal closeOnDocumentClick>
                        <span>Hello we are PetCompass</span>
                    </Popup> 
                </nav>
            </div>
        );
    }
}
export default Headline;
