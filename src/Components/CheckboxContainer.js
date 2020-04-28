import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const checkboxes = [
    {
      name: 'Male',
      key: 'checkBox1',
      label: 'Check Box 1',
    },
    {
      name: 'Female',
      key: 'checkBox2',
      label: 'Check Box 2',
    },
    {
      name: 'check-box-3',
      key: 'checkBox3',
      label: 'Check Box 3',
    },
    {
      name: 'check-box-4',
      key: 'checkBox4',
      label: 'Check Box 4',
    },
  ];

class CheckboxContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map()
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked)}));
    }

    render() {
        return (
            <div>
                {
                    checkboxes.map(item => (
                        <label>
                          {item.name}
                          <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                        </label>
                    ))
                }
            </div>
        )
    }
}

export default CheckboxContainer;