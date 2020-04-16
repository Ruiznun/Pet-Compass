import React, { Component } from 'react';

class Animal extends Component {
    constructor(props) {
        super(props);

        this.pic = this.props.pic;
        this.name = this.props.name;
        this.gender = this.props.gender;
        this.type = this.props.type;
        this.breed = this.props.breed;
        this.age = this.props.age;
        this.size = this.props.size;
        this.about = this.props.about;
    }

    render() {
        return (
            <div className="container">
                <div className="github-profile">
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