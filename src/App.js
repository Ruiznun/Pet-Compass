import React, { Component } from 'react';
import Headline from './Components/Headline'
import AnimalContainer from './Components/AnimalContainer'
// import Animal from './Components/Animal'
// import FilterMenu from './Components/FilterMenu'

import dog_pic from './Images/dog.jpg'
import cat_pic from './Images/cat.jpg'

class App extends Component {
    render() {
        var cat = {
            pic: cat_pic,
            name : "Max",
            gender : "M",
            type : "Cat",
            breed : "Tabby",
            age : 2,
            size : "Medium",
            about: "Short info about the animal to include extra details about their personality and other info."
        };

        var dog = {
            pic: dog_pic,
            name : "Gracie",
            gender : "F",
            type : "Dog",
            breed : "Collie Mix",
            age : 6,
            size : "Large",
            about: "Short info about the animal to include extra details about their personality and other info."
        };

        return (
            <div>
                <div className="container center">
                    <Headline />
                </div>
                {/* <div className="center">
                <FilterMenu/>
                </div> */}
                <div className="animal_container">
                    <AnimalContainer animals={[cat, dog]} />
                </div>
            </div>
        );
    }
}

export default App;