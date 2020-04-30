import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Headline extends Component {
    render() {
        return (

            <div className="container center">
                <nav className="menu">
                    <h1 className="menu__logo">Pet Compass</h1>
                    <Popup trigger={<button className="menu__about-us"></button>} modal closeOnDocumentClick>
                       <div className="about-us-page">
                            <div className="header">About PetCompass</div>
                            <div className="content">
                                {" "}
                                We are PetCompass, a site dedicated to helping shelter host and display their animals for the world to see.
                                The project was started when we looked at similar websites that shelter used and we found them to be a bit lacking.
                                We wanted to take the concepts and structures those site had and update and streamline them. 
                            </div>
                       </div>
                    </Popup> 
                </nav>
            </div>
        );
    }
}
export default Headline;
