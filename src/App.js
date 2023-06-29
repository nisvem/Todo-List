import ToDoItem from './TodoItem/TodoItem';
import './App.css';
import tasksData from './data.js';

function App() {
  const handleChange = (id) => {
    console.log(1);
  };

  const ToDoItems = tasksData.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        description={item.description}
        done={item.done}
        handleChange={() => {
          handleChange(item.id);
        }}
      />
    );
  });
  return (
    <div className="App">
      <div className="container">
        <h2>ToDo List</h2>
        <div className="todo-list">
          {ToDoItems}
        </div>
      </div>
    </div>
  );
}

export default App;
