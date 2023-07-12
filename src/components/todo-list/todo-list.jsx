import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({todoItems, onDelete, onChecked}) => {

  const activeTasks = todoItems.filter(task => task.done === false);
  const doneTasks = todoItems.filter(task => task.done === true);

  const Tasks = [...activeTasks, ...doneTasks].map((item) => {
    const {id, ...props} = item;
    return (
      <ToDoItem
        key={id}
        onDelete = {() => {onDelete(id)}}
        onChecked = {() => {onChecked(id)}}
        {...props}
      />
    );
  });

  return (
    <div className='todo-list'>
      {Tasks}
    </div>
  );
}

export default ToDoList;