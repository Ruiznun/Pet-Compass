import React, { Component } from "react";
import Animal from "./Animal";
import Sidebar from "./sidebar";

// const animals = [];
class AnimalContainer extends Component {
  constructor(props) {
    super(props);
    this.animal_api_data = [];
    this.is_updating = false;

    this.state = {
      animals: [],
      is_list: 1,
      is_loaded: false,
      filterArray: { male: true },
    };
    this.is_list = this.setList.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  componentDidMount() {
    this.animal_api_data = this.props.animals;

    var temp = [];

    this.animal_api_data.map((animal, i) => {
      temp.push(
        <div className="animal" key={i}>
          <Animal animal={animal} />
        </div>
      );
    });

    this.setState({
      is_loaded: true,
      animals: temp,
    });
  }

  componentDidUpdate() {
    if (this.is_updating) {
      var temp = [];
      this.animal_api_data.map((animal, i) => {
        temp.push(
          <div className="animal" key={i}>
            <Animal animal={animal} />
          </div>
        );
      });

      this.setState({ animals: [] });
      this.setState((prevState) => ({
        animals: [...prevState.animals, temp],
      }));

      this.is_updating = false;
    }
  }

  setList(id) {
    this.is_updating = true;
    this.setState({ is_list: id });
  }

  clearList(){
    this.is_updating = true;
    this.setState({ animals: [] });
  }

  parentFunction = (filterData) => {
    this.is_updating = true;
    this.animal_api_data = this.props.animals;
    this.clearList();

    this.animal_api_data = this.animal_api_data.filter(function (animal) {
      var is_okay = true;
      //gender
      if (filterData.gender.male) {
        if (animal.gender !== "Male") return false;
      }
      if (filterData.gender.female) {
        if (animal.gender !== "Female") return false;
      }
      //species
      if (filterData.species.dog) {
        if (animal.species !== "Dog") return false;
      }
      if (filterData.species.cat) {
        if (animal.species !== "Cat") return false;
      }
      if (filterData.species.small_animal) {
        if (animal.species !== "Small Animal") return false;
      }
      if (filterData.species.fish) {
        if (animal.species !== "Fish") return false;
      }
      if (filterData.species.bird) {
        if (animal.species !== "Bird") return false;
      }
      if (filterData.species.reptile) {
        if (animal.species !== "Reptile") return false;
      }
      if (filterData.species.crustacean) {
        if (animal.species !== "Crustacean") return false;
      }
      //breed
      if (filterData.breed !== "") {
        if (animal.breed == filterData.breed) return false;
      }
      //age
      if ((filterData.age.min <= filterData.age.max) && animal.age < filterData.age.min || animal.age > filterData.age.max) return false;

      //size
      if (filterData.size.s) {
        if (animal.size !== "Small") return false;
      }
      if (filterData.size.m) {
        if (animal.size !== "Medium") return false;
      }
      if (filterData.size.l) {
        if (animal.size !== "Large") return false;
      }

      return is_okay;
    });

    this.setState({ is_loaded: true });
  };

  render() {
    var { is_loaded, animals } = this.state;

    if (is_loaded) {
      return (
        <div>
          <Sidebar callFromParent={this.parentFunction.bind(this)} />
          <div className="animal_menu">
            <div className="menu__right">
              <button
                onClick={() => this.setList(1)}
                className="menu__list-button"
              ></button>
              <button
                onClick={() => this.setList(2)}
                className="menu__grid-button"
              ></button>
            </div>
          </div>
          <div
            className={
              this.state.is_list === 1 ? "animal__list" : "animal__grid"
            }
          >
            {animals}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Sidebar callFromParent={this.parentFunction.bind(this)} />
          <div className="animal_menu">
            <div className="menu__right">
              <button
                onClick={() => this.setList(1)}
                className="menu__list-button"
              ></button>
              <button
                onClick={() => this.setList(2)}
                className="menu__grid-button"
              ></button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AnimalContainer;
