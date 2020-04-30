import React, { Component } from 'react';
import Headline from './Components/Headline'
import AnimalContainer from './Components/AnimalContainer'
const superagent = require('superagent');

// import dog_pic from './Images/dog.jpg'
// import cat_pic from './Images/cat.jpg'

class App extends Component {
    state = {
        animal_data: []
    };

    componentDidMount() {
        superagent.get("/animals").end((err, res) => {
            this.setState({animal_data: JSON.parse(res.text)});
        });
    }

    render() {
        // console.log(JSON.stringify(this.state.animal_data));
        return (
            <div>
                <div className="container center">
                    <Headline />
                </div>
                <div className="animal_container">
                    <AnimalContainer animals={this.state.animal_data} />
                </div>
            </div>
        );
    }
}

export default App;