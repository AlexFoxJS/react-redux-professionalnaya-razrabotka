import React from 'react'

import TodoListItem from './../TodoListItem'

const TodoList = ({ todos }) => {
	const items = todos.map((item, i) => (
		<li key={i}>
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