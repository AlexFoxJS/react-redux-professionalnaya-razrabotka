import React from 'react'
import './TodoList.css'

import TodoListItem from '../TodoListItem'

const TodoList = ({ todos }) => {
	const items = todos.map(item => (
		<li className="list-group-item" key={item.id}>
			<TodoListItem {...item} />
		</li>
	));

	return (
		<ul className="todoList todo-list list-group">
			{items}
		</ul>
	)
};

export default TodoList