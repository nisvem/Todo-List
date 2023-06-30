import React from "react";
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ToDoItem = props => {
  return (
      <div className="todo-list__item">
        <Checkbox 
          checked={props.done} 
          onClick={props.handleChange}
        />
        <p>{props.description}</p>
        <IconButton className="btn-delete">
          <DeleteIcon/>
        </IconButton>
      </div>
  );
}

export default ToDoItem;