import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

class FilterSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      checkedItems: {
        gender:{
          male:false,
          female:false
        },
        species: {
          dog:false,
          cat:false,
          rabbit:false
        },
        size:{
          s:false,
          m:false,
          l:false
        }
      }
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    const isChecked = e.target.checked;

    var new_items = JSON.parse(JSON.stringify(this.state.checkedItems));
    new_items[key][val] = isChecked;
    this.setState({checkedItems: new_items });
  }

  passInfo=(e)=>{
    e.preventDefault();
    this.props.callFromParent(this.state.checkedItems)
  }

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
                  value='male'
                  type="checkbox"
                  checked={this.state.checkedItems.gender.male}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Female
                      <input
                  name="gender"
                  val="female"
                  type="checkbox"
                  checked={this.state.checkedItems.gender.female}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Cat
                      <input
                  name="species"
                  value="cat"
                  type="checkbox"
                  checked={this.state.checkedItems.species.cat}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Rabbit
                      <input
                  name="species"
                  value="rabbit"
                  type="checkbox"
                  checked={this.state.checkedItems.species.rabbit}
                  onChange={this.handleChange}
                />
              </label>
            </form>
            {/* <p>Breed:</p>
            <form>
              <label>
                <input
                  type="text"
                />
              </label>
            </form>
            <p>Age:</p>
            <form>
              <label>
                <input
                  name="age"
                  type="number"
                />
              </label>
            </form> */}
            <p>Size:</p>
            <form>
              <label>
                Small
                      <input
                  name="size"
                  value="s"
                  type="checkbox"
                  checked={this.state.checkedItems.size.s}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Medium
                      <input
                  name="size"
                  val="m"
                  type="checkbox"
                  checked={this.state.checkedItems.size.m}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Large
                      <input
                  name="size"
                  value="l"
                  type="checkbox"
                  checked={this.state.checkedItems.size.l}
                  onChange={this.handleChange}
                />
              </label>
            </form>
            <button onClick={this.passInfo.bind(this)}> Submit </button>
          </b>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", opacity: 0.8 },
          root: {right: 100}
        }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)} className='filter_button' >
          Filter
            </button>
      </Sidebar>
    );
  }
}

export default FilterSidebar;