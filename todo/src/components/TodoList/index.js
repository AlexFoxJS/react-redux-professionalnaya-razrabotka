import React from 'react'

import TodoListItem from './../TodoListItem'
import {itemsList} from './mock'

const TodoList = () => (
	<ul>
		{itemsList.map(({label, important}, i) => (
			<li key={i}>
				<TodoListItem label={label} important={important} />
			</li>
		))}
	</ul>
);

export default TodoList