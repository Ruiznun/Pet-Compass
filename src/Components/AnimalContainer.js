import React, { Component } from 'react';
import Animal from './Animal'

class AnimalContainer extends Component {
    constructor(props) {
        super(props);

        this.animal_list = this.props.animals;
        
        this.state = {
            is_list: 1
        }
        this.is_list = this.setList.bind(this);

    }

    setList(id){
        this.setState({is_list : id});
    }

    render() {
        const animals = [];
        this.animal_list.map((animal, i) => {
            animals.push(
                <div className={this.state.is_list === 1? "animal__list" : "animal__grid"} key={i}>
                    <Animal animal={animal} />
                </div>
            );
        });

        return (
            <div>
                <div className="animal_menu">
                    <div className="menu__right">
                        <button onClick={() => this.setList(1)} className="menu__list-button"></button>
                        <button onClick={() => this.setList(2)} className="menu__grid-button"></button>
                    </div>
                </div>
                {animals}
            </div>
        );
    }
}

export default AnimalContainer;