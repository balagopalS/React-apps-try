import React,{useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameref = useRef()
  // const todoNameref = useRef<TextFieldProps>(null);
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(todos))
}, [todos])

function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete=!todo.complete
  setTodos(newTodos)
}

  function handleClear() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleAddtodo(e) {
      const name = todoNameref.current.value
      if (name==='') return
      setTodos(prevTodos => {
        console.log({name})
        return [...prevTodos, {id : uuidv4(), name: name, complete: false}]
      })
      todoNameref.current.value=null
    }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField id="outlined-basic" label="Enter Todo" variant="outlined" inputRef={todoNameref}/></Box><br />
      {/* <input ref={todoNameref} type="text" /> */}
      <Button variant="contained" onClick={handleAddtodo}>Add Todo</Button><br/><br/>
      <Button variant="contained" onClick={handleClear}>Clear Completed</Button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
