import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './todo-item.css';


const ToDoItem = ({done, description, onChecked, onDelete}) => {
  let mainClassName = 'todo-list__item';
  mainClassName += done ? ' todo-list__item--done' : '';

  return (
      <div className={mainClassName}>
        <Checkbox 
          onClick={onChecked}
          checked={done} 
        />
        <p onClick={onChecked}>{description}</p>
        <IconButton className='btn-delete' onClick={onDelete}>
          <DeleteIcon/>
        </IconButton>
      </div>
  );
}

export default ToDoItem;