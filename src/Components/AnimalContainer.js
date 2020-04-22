import React, { Component } from 'react';
import Animal from '../Components/Animal'

class AnimalContainer extends Component {
    constructor(props) {
        super(props);

        this.animal_list = this.props.animals;
    }
    render() {
        const animals = [];
        this.animal_list.forEach((animal) => {
            animals.push(
                <div className="animal">
                    <Animal animal={animal} />
                </div>
            )
        });

        return (
            <div>
                {animals}
            </div>
        );
    }
}

export default AnimalContainer;