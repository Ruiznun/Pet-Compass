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
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        };

        var dog = {
            pic: dog_pic,
            name : "Gracie",
            gender : "F",
            type : "Dog",
            breed : "Border Collie Mix",
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
                    <AnimalContainer animals={[cat, dog, cat, dog, cat, dog, dog, dog, cat, cat]} />
                </div>
            </div>
        );
    }
}

export default App;