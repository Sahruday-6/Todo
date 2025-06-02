import React, { useState } from 'react'
import TodoList from './components/TodoList';


const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
  const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");  
  }
  const deleteHandler = (indexValue) =>{
   const newTodos = todos.filter((todo,index)=> index !== indexValue);
   setTodos(newTodos);
  } 


  return (
    <center>
      <div className = "body">
      <div className = "card">
          <div className = "card-body">
            <h4 className = "title">Todo Management Application</h4>
             <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;&nbsp;
              <input type="submit" name="Add" value="Add"/>
            </form>
            <TodoList todos={todos} deleteHandler = {deleteHandler}/>
          </div>
        </div>
      </div>
    </center>
  )
}

export default App