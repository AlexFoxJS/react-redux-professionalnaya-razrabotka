import React from 'react'
import ReactDOM from 'react-dom'

const AppHeader = () => (
	<h1>Todo List</h1>
);

const SearchPanel = () => (
	<input placeholder="search" type="text"/>
);

const TodoList = () => {
	const itemsList = ['Test_1', 'Test_2', 'Test_3', 'Test_4', 'Test_5'];

	return (
		<ul>
			{itemsList.map(item => <li>{item}</li>)}
		</ul>
	)
};

const App = () => (
	<div>
		<AppHeader />
		<SearchPanel />
		<TodoList />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
