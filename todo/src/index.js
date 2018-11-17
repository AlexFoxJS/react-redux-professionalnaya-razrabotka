import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = (
	<div>
		<h1>ToDo List</h1>
		<input placeholder="search" type="text"/>
		<ul>
			<li>Learn React</li>
			<li>Build Awesome app</li>
		</ul>
	</div>
);

ReactDOM.render(TodoList, document.getElementById('root'));
