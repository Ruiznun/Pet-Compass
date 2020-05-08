import React, { Component } from 'react';
import Headline from './Components/Headline'
import AnimalContainer from './Components/AnimalContainer'

// import dog_pic from './Images/dog.jpg'
// import cat_pic from './Images/cat.jpg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animal_data: [],
            is_loaded: false,
        };
    }

    componentDidMount() {
        fetch("https://ec2-54-226-174-249.compute-1.amazonaws.com:8043/animals")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    is_loaded: true,
                    animal_data: json,
                })
            })
            .catch(error => {
                console.log(error);
                alert("ERROR: Server reponded with code " + error.status);
            });
    }

    render() {
        var { is_loaded, animal_data } = this.state;

        if (!is_loaded) {
            return (
                <div>
                    <div className="container center">
                        <Headline />
                    </div>
                    <div className="animal_container center">
                        Loading...
                    </div>
                </div>
            );
        } else {
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
}

export default App;