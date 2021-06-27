import { ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './Todo.css'

//Originally I had this component just show the basic three items as static information. I later added the interactive elemets


//this is the function that allows us to add items to ouyr list
function TodoForm({ addTodo }) {
	//In order to set our state, we write it like this: the first is the "value" and the second is how we are doing to be setting the state
	const [value, setValue] = useState('');
	//adding this handle submit is key
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


//The below is us adding state tio our component. It is React Hooks, so state looks a but different.
function Todos() {
	const [todos, setTodos] = useState([

	])
	function Todo({ todo, index, completeTodo, removeTodo }) {
		return (
			//the text decoration at the bottom is to strike out the text is "isCompleted" is true. if not, nothing will happen. This is with the ternary operator!
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
	//adding a new item
	const addTodo = text => {
		//this section (repeated a few times as you can see below) grabs the existing list of items, adds on the new item, and display that new list
		const newTodos = [...todos, { text }];
		setTodos(newTodos)
	}

	//completing an item with a strike through
	const completeTodo = (index, isComplete) => {

		if(isComplete ===true){
			const newTodos = [...todos];
			newTodos[index].isCompleted = false; 
			setTodos(newTodos);			
		}else{
			const newTodos = [...todos];
			newTodos[index].isCompleted = true; //set the completion thing to true
			setTodos(newTodos);			
		}

	}

	//removing an item
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
//time to render out everything!!! Notice how we map our the todos by going through each one with .map(). There is the name list of todos, and also a section for adding todos
	return (
		<section className="todos" id="Todos">
			<div>
				<h1>-</h1>
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

export default Todos;