import ToDoItem from './TodoItem/TodoItem';
import './App.css';
import tasksData from './data.js';
import { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      todoItems: tasksData
    }
  }
  
  handleChange = (id) => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    const is = this.state.todoItems[index].done;

    this.setState( state => {
      const {todoItems} = state;
      todoItems[index].done = !is;
      return todoItems;
    });
  };

  render() {
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task => task.done === false);
    const doneTasks = todoItems.filter(task => task.done === true);
    const Tasks = [...activeTasks, ...doneTasks].map((item) => {
      return (
        <ToDoItem
          key={item.id}
          description={item.description}
          done={item.done}
          handleChange={() => {
            this.handleChange(item.id);
          }}
        />
      );
    });

    return (
      <div className="App">
        <div className="container">
          <h2>ToDo List</h2>
          <div className="todo-list">
            {Tasks}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
