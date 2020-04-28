import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import FilterMenu from './FilterMenu';
import CheckboxContainer from './CheckboxContainer';
import Checkbox from './Checkbox';

class FilterSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
          <Sidebar
            sidebar={
              <b>
                Filter Options<br/>
                Gender:
                <CheckboxContainer/>
                Age:<br/>
                <CheckboxContainer/>
                Size:
                <CheckboxContainer/>
              </b>
              }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white", opacity: 0.8 }}}
          >
            <button onClick={() => this.onSetSidebarOpen(true)} className = 'filter_button'>
              Filter
            </button>
          </Sidebar>
        );
      }
}

export default FilterSidebar;