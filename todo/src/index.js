import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './components/TodoList'
import SearchPanel from './components/SearchPanel'
import AppHeader from './components/AppHeader'

import {itemsList} from './components/mock'

const App = () => (
	<div>
		<AppHeader />
		<SearchPanel />
		<TodoList todos={itemsList} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
