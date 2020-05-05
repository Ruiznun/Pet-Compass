import React, { Component } from "react";
import Sidebar from "react-sidebar";

class FilterSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      checkedItems: {
        gender: {
          male: false,
          female: false
        },
        species: {
          dog: false,
          cat: false,
          small_animal: false,
          bird: false,
          reptile: false,
          fish: false,
          crustacean: false
        },
        size: {
          s: false,
          m: false,
          l: false
        },
      },
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  handleChangeCheck(e) {
    const key = e.target.name;
    const val = e.target.value;
    const isChecked = e.target.checked;

    var new_items = JSON.parse(JSON.stringify(this.state.checkedItems));
    new_items[key][val] = isChecked;
    this.setState({ checkedItems: new_items });
  }

  //handle change value (text)
  handleChangeValue(e) {
    const key = e.target.name;
    const val = e.target.value;

    var new_items = JSON.parse(JSON.stringify(this.state.checkedItems));
    new_items[key] = val;
    this.setState({ checkedItems: new_items });
  }

  passInfo = (e) => {
    e.preventDefault();
    this.props.callFromParent(this.state.checkedItems);
  };

  render() {
    return (
      <Sidebar
        sidebar={
          <b>
            <p>Filter Options</p>
            <p>Gender:</p>
            <form>
              <label>
                Male
                <input
                  name="gender"
                  value="male"
                  type="checkbox"
                  checked={this.state.checkedItems.gender.male}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <br />
              <label>
                Female
                <input
                  name="gender"
                  value="female"
                  type="checkbox"
                  checked={this.state.checkedItems.gender.female}
                  onChange={this.handleChangeCheck}
                />
              </label>
            </form>
            <p>Species:</p>
            <form>
              <label>
                Dog
                <input
                  name="species"
                  value="dog"
                  type="checkbox"
                  checked={this.state.checkedItems.species.dog}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                Cat
                <input
                  name="species"
                  value="cat"
                  type="checkbox"
                  checked={this.state.checkedItems.species.cat}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                Small Animal
                <input
                  name="species"
                  value="small_animal"
                  type="checkbox"
                  checked={this.state.checkedItems.species.small_animal}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                Bird
                <input
                  name="species"
                  value="bird"
                  type="checkbox"
                  checked={this.state.checkedItems.species.bird}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                Fish
                <input
                  name="species"
                  value="fish"
                  type="checkbox"
                  checked={this.state.checkedItems.species.fish}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                reptile
                <input
                  name="species"
                  value="reptile"
                  type="checkbox"
                  checked={this.state.checkedItems.species.reptile}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                Crustacean
                <input
                  name="species"
                  value="crustacean"
                  type="checkbox"
                  checked={this.state.checkedItems.species.crustacean}
                  onChange={this.handleChangeCheck}
                />
              </label>
            </form>
            <p>Size:</p>
            <form>
              <label>
                Small
                <input
                  name="size"
                  value="s"
                  type="checkbox"
                  checked={this.state.checkedItems.size.s}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                Medium
                <input
                  name="size"
                  value="m"
                  type="checkbox"
                  checked={this.state.checkedItems.size.m}
                  onChange={this.handleChangeCheck}
                />
              </label>
              <label>
                Large
                <input
                  name="size"
                  value="l"
                  type="checkbox"
                  checked={this.state.checkedItems.size.l}
                  onChange={this.handleChangeCheck}
                />
              </label>
            </form>
            <button onClick={this.passInfo.bind(this)}> Submit </button>
          </b>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: { background: "white", opacity: 0.8 },
          root: { right: 100 },
        }}
      >
        <button
          onClick={() => this.onSetSidebarOpen(true)}
          className="filter_button"
        >
          Filter
        </button>
      </Sidebar>
    );
  }
}

export default FilterSidebar;
