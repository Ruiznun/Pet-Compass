import React, { Component } from 'react';
import Animal from './Animal'
// import { render } from '@testing-library/react';

const animals = [];
class AnimalContainer extends Component {
    constructor(props) {
        super(props);
        this.animal_list = [];

        this.state = {
            is_list: 1
        }
        this.is_list = this.setList.bind(this);

        // this.animal_list = JSON.parse(this.props.animals);

        // this.animal_list.map((animal, i) => {
        //     animals.push(
        //         <div className={this.state.is_list === 1 ? "animal__list" : "animal__grid"} key={i}>
        //             <Animal animal={animal} />
        //         </div>
        //     );
        // });

        // console.log(animals);
    }

    // componentDidUpdate() {
    //     this.animal_list = JSON.parse(this.props.animals);

    //     this.animal_list.map((animal, i) => {
    //         animals.push(
    //             <div className={this.state.is_list === 1 ? "animal__list" : "animal__grid"} key={i}>
    //                 <Animal animal={animal} />
    //             </div>
    //         );
    //     });

    //     console.log(animals);
    // }

    setList(id) {
        this.setState({ is_list: id });
    }

    render() {
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