import React from 'react'

import TodoListItem from './../TodoListItem'

const itemsList = ['Test_1', 'Test_2', 'Test_3', 'Test_4', 'Test_5'];

const TodoList = () => (
	<ul>
		{itemsList.map(item => <li><TodoListItem /></li>)}
	</ul>
);

export default TodoList