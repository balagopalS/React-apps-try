import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Todo({todo, toggleTodo}) {
  console.log(todo);
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div>
      {/* <label>  */}
      <FormGroup>
        <FormControlLabel control={<Checkbox  checked={todo.complete} onChange={handleTodoClick} />} label={todo.name} />
      </FormGroup>
        {/* <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
        {todo.name}
      </label> */}
    </div>
  )
}
