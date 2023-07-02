import { Component } from 'react';

import ToDoList from '../todo-list/todo-list';
import ToDoItemAdd from '../todo-item-add/todo-item-add'

import './app.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
  }

  onDeleteItem = (id) => {
    this.setState( ({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      };
    });
  }

  onCheckedItem = (id) => {
    this.setState( ({data}) => {
      return {
        data: data.map((item) => {
          if(item.id === id) {
            return {...item, done: !item.done}
          }
          return item
        })
      };
    });
  }

  onAddItem = (description) => {
    let newId = 0;

    this.state.data.forEach(item => {
      if(item.id >= newId) {
        newId = item.id + 1;
      }
    });

    const newData = {
      description: description,
      done: false,
      id: newId,
    };

    this.setState(({data}) => {
      const newStateData = [...data, newData];
      return {
        data: newStateData
      };
    });
  }

  render() {
    return (
      <div className='todo'>
        <div className='container'>
          <h1 className='todo-title'>ToDo List</h1>
          <br/>
          <ToDoItemAdd
            onAddItem = {(description) => {
              this.onAddItem(description);
            }}
          />
          <ToDoList 
            todoItems={this.state.data}
            onDelete = {(id) => {
              this.onDeleteItem(id);
            }}
            onChecked = {(id) => {
              this.onCheckedItem(id);
            }}
            />
            <br/>
            <p className='todo-summ-tasks'>Total: {this.state.data.length}</p>
            <p className='todo-summ-tasks'>Completed: {this.state.data.filter(item => item.done === true).length}</p>
            <p className='todo-summ-tasks'>Uncompleted: {this.state.data.filter(item => item.done === false).length}</p>

        </div>
      </div>
    );
  }
}

export default App;
