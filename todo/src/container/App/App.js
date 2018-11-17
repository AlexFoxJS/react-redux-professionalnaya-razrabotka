import React from 'react'

import TodoList from '../../components/TodoList'
import SearchPanel from '../../components/SearchPanel'
import AppHeader from '../../components/AppHeader'

import {itemsList} from '../../components/mock'

import './App.css';

const App = () => (
	<div className="app">
		<AppHeader />
		<SearchPanel />
		<TodoList todos={itemsList} />
	</div>
);

export default App