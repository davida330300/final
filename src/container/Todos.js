import { ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './Todo.css'


function TodoForm({ addTodo }) {
	
  const [value, setValue] = useState('');
  const handleSubmit = e => {
	e.preventDefault();
	if (!value) return;
	addTodo(value);
	setValue('');
  }

  return (
	<form onSubmit={handleSubmit}>
  	  <input 

		type="text" 
		className="input" 
		value={value} 
		placeholder="Add todo..."
		size="45"
		onChange={e => setValue(e.target.value)} />
	</form>
  )

}

export default function Todos() {
  const [todos, setTodos] = useState([]);

  function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
  	  <div style ={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo"> 
		{todo.text}
		<div>
		  <Button color="primary" onClick={() => completeTodo(index, todos[index].isCompleted)}>
			Complete
		  </Button>
					
		  <Button onClick={() => removeTodo(index)}>
			X
		  </Button>
		</div>
	  </div>
	)
  }

  const addTodo = text => {
	const newTodos = [...todos, { text }];
	setTodos(newTodos)
  }

  const completeTodo = (index, isComplete) => {

	if(isComplete ===true){
  	  const newTodos = [...todos];
	  newTodos[index].isCompleted = false; 
	  setTodos(newTodos);			
	}else{
	  const newTodos = [...todos];
	  newTodos[index].isCompleted = true; 
	  setTodos(newTodos);			
	}

  }


  const removeTodo = index => {
	const newTodos = [...todos];
	newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  return (
	<section className="todos" id="Todos">
  	  <div>
		<h6 className="ha">-</h6>
		<h6 className="ha">-</h6>
		<h6 className="ha">-</h6>

        <h1 className="title">Todos</h1>
		<h2 className ="Data">{today}</h2>
   	  </div>
	  <div className="todo-list"> 
		{todos.map((todo, index) => (
		<Todo 
			key={index} 
			index={index} 
			todo={todo} 
			completeTodo={completeTodo} 
			removeTodo={removeTodo}/>
		))}
		<TodoForm className = "form" addTodo={addTodo} />
	  </div>
	</section>
	)
}
