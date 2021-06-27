import React, { useState } from 'react';
import './Todo.css'

//Originally I had this component just show the basic three items as static information. I later added the interactive elemets
function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		//the text decoration at the bottom is to strike out the text is "isCompleted" is true. if not, nothing will happen. This is with the ternary operator!
		<div style ={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo"> 
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>
					Complete
				</button>
				
				<button onClick={() => removeTodo(index)}>
					X
				</button>
			</div>
		</div>
	)
}

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
				onChange={e => setValue(e.target.value)} />
		</form>
	)

}


//The below is us adding state tio our component. It is React Hooks, so state looks a but different.
function Todos() {
	const [todos, setTodos] = useState([

	])

	//adding a new item
	const addTodo = text => {
		//this section (repeated a few times as you can see below) grabs the existing list of items, adds on the new item, and display that new list
		const newTodos = [...todos, { text }];
		setTodos(newTodos)
	}

	//completing an item with a strike through
	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true; //set the completion thing to true
		setTodos(newTodos);
	}

	//removing an item
	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	}
	
//time to render out everything!!! Notice how we map our the todos by going through each one with .map(). There is the name list of todos, and also a section for adding todos
	return (
		<div className="todos">
			<div>
        <h2 className="SubTitle">Todos</h2>
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
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	)

}

export default Todos;