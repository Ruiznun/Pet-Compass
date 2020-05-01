import React, { Component } from 'react';

class Animal extends Component {
    constructor(props) {
        super(props);
        var my_animal = this.props.animal;

        this.pic = my_animal.picture;
        this.name = my_animal.name;
        this.gender = my_animal.gender;
        this.species = my_animal.species;
        this.breed = my_animal.breed;
        this.age = my_animal.age;
        this.size = my_animal.size;
        this.about = my_animal.description;
    }

    render() {
        return (
            // <div className="container">
                <div className="animal-profile">
                    <img className="pic" src={this.pic} alt="Animal Pic" />
                    <div className="info">
                        <div className="name">{this.name} | {this.species}</div>
                        <div className="breed"><strong>Breed: </strong>{this.breed}</div>
                        <div className="gender"><strong>Gender: </strong>{this.gender}</div>
                        <div className="age"><strong>Age: </strong>{this.age}yrs. old</div>
                        <div className="size"><strong>Size: </strong>{this.size}</div>
                    </div>
                    <div className="animal_description">
                        <p>{this.about}</p>
                    </div>
                </div>
            // </div>
        );
    }
}

export default Animal;