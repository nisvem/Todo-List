import { Component } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './todo-item-add.css';


class ToDoItemAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
  }

  onInputChange = (e) => {
    this.setState(() => {
      return {
        description: e.target.value
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.description) {
      this.props.onAddItem(this.state.description);
      this.setState({
        description: ''
      });
    }
  }

  render() {
    return (
      <form 
        className='add-todo-block'
        onSubmit={(e) => {
          this.onSubmit(e);
        }}
        >
        <TextField 
          className='add-todo-input' 
          id='add-todo-input' 
          label='Add tasks' 
          variant='outlined' 
          value={this.state.description}
          onChange={(e) => {
            this.onInputChange(e);
          }}/>
        <Button variant='contained' type='submit'>Add</Button>
      </form>
    );
  }
}

export default ToDoItemAdd;