import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './components/TodoList'
import SearchPanel from './components/SearchPanel'
import AppHeader from './components/AppHeader'

const App = () => (
	<div>
		<AppHeader />
		<SearchPanel />
		<TodoList />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
