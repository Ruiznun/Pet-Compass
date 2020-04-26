import React, { Component } from 'react';

class Animal extends Component {
    constructor(props) {
        super(props);
        var my_animal = this.props.animal;

        this.pic = my_animal.pic;
        this.name = my_animal.name;
        this.gender = my_animal.gender;
        this.type = my_animal.type;
        this.breed = my_animal.breed;
        this.age = my_animal.age;
        this.size = my_animal.size;
        this.about = my_animal.about;
        
        // this.split_about = [this.about];
        // var split_index = 50;
        // if (this.about.length > 50) {
        //     this.split_about = [this.about.substring(0, split_index), this.about.substring(split_index)];
        // }
    }

    render() {
        return (
            <div className="container">
                <div className="animal-profile">
                    <img className="pic" src={this.pic} alt="Animal Pic" />
                    <div className="info">
                        <div className="name">{this.name} | {this.type}</div>
                        <div className="breed">Breed: {this.breed}</div>
                        <div className="gender">Gender: {this.gender}</div>
                        <div className="age">Age: {this.age} years old</div>
                        <div className="size">Size: {this.size}</div>
                    </div>
                    <div className="animal_description">
                        <p>{this.about}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Animal;