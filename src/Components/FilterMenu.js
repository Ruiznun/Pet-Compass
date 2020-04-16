import React, { Component } from 'react';
import Select from 'react-select';
import Horizontal from './Horizontal';
import Slider, {Range} from 'rc-slider';


const animals = [
    { label: "Dog", value: 1},
    { label: "Cat", value: 2},
    { label: "Rabbit", value: 3},
];

const Type = () => (
    <div className="app">
        <div className="container">
            <Select options={animals} isMulti />
        </div>
    </div>
);

const gender = [
    { label: "Male", value: 1},
    { label: "Female", value: 2},
];

const Gend = () => (
    <div className="app">
        <div className="container">
            <Select options={gender} isMulti />
        </div>
    </div>
);



class FilterMenu extends Component {
    constructor(){
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div className = "center">
                <button onClick={this.showMenu}>
                    Filter
                </button>
                {
                    this.state.showMenu ? (
                        <div className="Filter" ref={(element) => { this.dropdownMenu = element;}}>
                            Species
                            <Type/>
                            Gender
                            <Gend/>
                            Age
                            <Range />
                            
                        </div>
                    )
                    : (
                        null
                    )
                 }
            </div>
        );
    }
}

export default FilterMenu;