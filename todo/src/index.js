import React from 'react'
import ReactDOM from 'react-dom'

const AppHeader = () => (
	<h1>Todo List</h1>
);

const SearchPanel = () => (
	<input placeholder="search" type="text"/>
);

const TodoList = () => (
	<ul>
		<li>Learn React</li>
		<li>Build Awesome app</li>
	</ul>
);

const App = () => (
	<div>
		<AppHeader />
		<SearchPanel />
		<TodoList />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
