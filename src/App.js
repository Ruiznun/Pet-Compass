import React, { Component } from 'react';
import Headline from './Components/Headline'
import Animal from './Components/Animal'

import dog_pic from './Images/dog.jpg'
import cat_pic from './Images/cat.jpg'

class App extends Component {
    render() {
        var cat_name = "Max";
        var cat_gender = "M";
        var cat_type = "Cat";
        var cat_breed = "Tabby";
        var cat_age = 2;
        var cat_size = "Medium";

        var dog_name = "Gracie";
        var dog_gender = "F";
        var dog_type = "Dog";
        var dog_breed = "Collie Mix";
        var dog_age = 6;
        var dog_size = "Large";
        
        var about = "Short info about the animal to include extra details about their personality and other info.";

        return (
            <div>
                <div className="container center">
                    <Headline />
                </div>
                <div className="animal_container">
                    <Animal
                        pic={cat_pic}
                        name={cat_name}
                        gender={cat_gender}
                        type={cat_type}
                        breed={cat_breed}
                        age={cat_age}
                        size={cat_size}
                        about={about}
                    />
                </div>
                <div className="animal_container">
                    <Animal 
                        pic={dog_pic}
                        name={dog_name}
                        gender={dog_gender}
                        type={dog_type}
                        breed={dog_breed}
                        age={dog_age}
                        size={dog_size} 
                        about={about}
                    />
                </div>
            </div>
        );
    }
}

export default App;