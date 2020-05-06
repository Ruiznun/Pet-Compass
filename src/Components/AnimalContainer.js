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
    console.log(filterData);
    this.is_updating = true;
    this.animal_api_data = this.props.animals;
    this.clearList();

    this.animal_api_data = this.animal_api_data.filter(function (animal) {
      //gender
      var good_gender = false;
      if (filterData.gender.male) {
        good_gender = (animal.gender === "Male");
      }
      if (filterData.gender.female) {
        good_gender = (animal.gender === "Female") ? true : good_gender;
      }
      if (!filterData.gender.female && !filterData.gender.male) {
        good_gender = true;
      }

      //species
      var good_species = false;
      if (filterData.species.dog) {
        good_species = (animal.species === "Dog");
      }
      if (filterData.species.cat) {
        good_species = (animal.species === "Cat") ? true : good_species;
      }
      if (filterData.species.small_animal) {
        good_species = (animal.species === "Small Animal") ? true : good_species;
      }
      if (filterData.species.fish) {
        good_species = (animal.species === "Fish") ? true : good_species;
      }
      if (filterData.species.bird) {
        good_species = (animal.species === "Bird") ? true : good_species;
      }
      if (filterData.species.reptile) {
        good_species = (animal.species === "Reptile") ? true : good_species;
      }
      if (filterData.species.crustacean) {
        good_species = (animal.species === "Crustacean") ? true : good_species;
      }
      if (!filterData.species.dog && !filterData.species.cat &&
          !filterData.species.small_animal && !filterData.species.fish &&
          !filterData.species.bird && !filterData.species.reptile &&
          !filterData.species.crustacean) {
        good_species = true;
      }

      //breed
      var good_breed = false;
      if (filterData.breed !== "") {
        good_breed = (animal.breed === filterData.breed);
      } else good_breed = true;

      //age
      var good_age = false;
      good_age = (animal.age >= filterData.age.min && animal.age <= filterData.age.max);

      //size
      var good_size = false;
      if (filterData.size.s) {
        good_size = (animal.size === "Small");
      }
      if (filterData.size.m) {
        good_size = (animal.size !== "Medium") ? true : good_size;
      }
      if (filterData.size.l) {
        good_size = (animal.size !== "Large") ? true : good_size;
      }
      if (!filterData.size.s && !filterData.size.m && !filterData.size.l){
        good_size = true;
      }

      return good_gender && good_species && good_breed && good_age && good_size;
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
