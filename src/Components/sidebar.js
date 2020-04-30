import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import FilterMenu from './FilterMenu';
import CheckboxContainer from './CheckboxContainer';
import Checkbox from './Checkbox';

class FilterSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: false,
            checkedItems: new Map()
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    handleChange(e){
      const item = e.target;
      const isChecked = e.target.checked;
      this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, isChecked)}))
    }

    passInfo=(e)=>{
      e.preventDefault();
      this.props.callFromParent(this.checkedItems)
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
                      name="male"
                      type="checkbox"
                      checked={this.state.checkedItems.get("male")}
                      onChange={this.handleChange}
                    />
                    </label>
                    <br/>
                    <label>
                      Female
                      <input
                        name="female"
                        type="checkbox"
                        checked={this.state.checkedItems.get("female")}
                        onChange={this.handleChange}
                      />
                    </label>
                  </form>
                  <p>Species:</p>
                  <form>
                    <label>
                      Dog
                      <input
                        name="dog"
                        type="checkbox"
                        checked={this.state.checkedItems.get("dog")}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label>
                      Cat
                      <input
                        name="cat"
                        type="checkbox"
                        checked={this.state.checkedItems.get("cat")}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label>
                      Rabbit
                      <input
                        name="rabbit"
                        type="checkbox"
                        checked={this.state.checkedItems.get("rabbit")}
                        onChange={this.handleChange}
                      />
                    </label>
                  </form>
                  <p>Breed:</p>
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
                  </form>
                  <p>Size:</p>
                  <form>
                  <label>
                      Small
                      <input
                        name="S"
                        type="checkbox"
                        checked={this.state.checkedItems.get("S")}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label>
                      Medium
                      <input
                        name="M"
                        type="checkbox"
                        checked={this.state.checkedItems.get("M")}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label>
                      Large
                      <input
                        name="L"
                        type="checkbox"
                        checked={this.state.checkedItems.get("L")}
                        onChange={this.handleChange}
                      />
                    </label>
                </form>
                <button onClick={this.passInfo.bind(this)}> Submit </button>
              </b>
              }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white", opacity: 0.8 }}}
          >
            <button onClick={() => this.onSetSidebarOpen(true)} className = 'filter_button' >
              Filter
            </button>
          </Sidebar>
        );
      }
}

export default FilterSidebar;