import React, { Component } from 'react';

class Headline extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        let searchForm = this.state.showForm ? (
            <form className="menu__search-form" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
        ) : '';

        return (
            <div className="container center">
                <nav className="menu">
                    <h1 className="menu__logo">Pet Compass</h1>

                    <div className="menu__right">
                        <button onClick={this.showForm.bind(this)} className="menu__search-button">Filter</button>
                        <button className="menu__list-button"></button>
                        <button className="menu__block-button"></button>

                        {searchForm}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Headline;
