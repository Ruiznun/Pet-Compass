import React, { Component } from 'react';
import Animal from './Animal'
import Sidebar from './sidebar';

const animals = [];
class AnimalContainer extends Component {
    constructor(props) {
        super(props);
        this.animal_list = [];

        this.state = {
            is_list: 1,
            is_loaded: false,
        }
        this.is_list = this.setList.bind(this);
    }

    componentDidMount() {
        this.animal_list = this.props.animals;

        this.animal_list.map((animal, i) => {
            animals.push(
                <div className="animal" key={i}>
                    <Animal animal={animal} />
                </div>
            );
        });

        this.setState({
            is_loaded: true,
        });
    }

    componentDidUpdate() {
        animals.length = 0;

        this.animal_list.map((animal, i) => {
            animals.push(
                <div className="animal" key={i}>
                    <Animal animal={animal} />
                </div>
            );
        });
    }

    setList(id) {
        this.setState({ is_list: id });
    }

    parentFunction=(filterData)=>{
        console.log(filterData);
    }

    render() {
        var { is_loaded } = this.state;

        if (is_loaded) {
            return (
                <div>
                    <Sidebar callFromParent={this.parentFunction.bind(this)}/>
                    <div className="animal_menu">
                        <div className="menu__right">
                            {/* <div><FilterSidebar /></div> */}
                            <button onClick={() => this.setList(1)} className="menu__list-button"></button>
                            <button onClick={() => this.setList(2)} className="menu__grid-button"></button>
                        </div>
                    </div>
                    <div className={this.state.is_list === 1 ? "animal__list" : "animal__grid"}>
                        {animals}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Sidebar callFromParent={this.parentFunction.bind(this)}/>
                    <div className="animal_menu">
                        <div className="menu__right">
                            <button onClick={() => this.setList(1)} className="menu__list-button"></button>
                            <button onClick={() => this.setList(2)} className="menu__grid-button"></button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default AnimalContainer;