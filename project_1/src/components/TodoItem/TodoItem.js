import React from 'react'

function TodoItem() {
	return (
		<span>Drink coffee</span>
	)
}

export default function TodoItemList() {
	return (
		<ul>
			<li>
				<TodoItem />
			</li>
			<li>
				<TodoItem />
			</li>
			<li>
				<TodoItem />
			</li>
		</ul>
	)
}