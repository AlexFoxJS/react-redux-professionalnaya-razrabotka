import React from 'react'

import TodoListItem from './../TodoListItem'

const TodoList = ({ todos }) => {
	const items = todos.map(item => (
		<li key={item.id}>
			<TodoListItem {...item} />
		</li>
	));

	return (
		<ul>
			{items}
		</ul>
	)
};

export default TodoList