import React, {Component} from 'react'

import TodoList from '../../components/TodoList'
import SearchPanel from '../../components/SearchPanel'
import AppHeader from '../../components/AppHeader'

import {todoData} from '../../components/mock'

import './App.css';

export default class App extends Component {

	state = {
		todoData
	};

	deleteItem = id => {
		const { todoData } = this.state;
		const newTodoData = todoData.filter(item => item.id !== id);

		this.setState({
			todoData: newTodoData
		})
	};

	render() {
		const { todoData } = this.state;

		return (
			<div className="app">
				<AppHeader />
				<SearchPanel />
				<TodoList todos={todoData} onDeleted={id => this.deleteItem(id)} />
			</div>
		)
	}
};