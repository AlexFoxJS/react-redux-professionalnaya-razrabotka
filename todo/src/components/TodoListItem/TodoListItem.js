import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({label, important = false}) => {
	const style = {
		color: important ? 'steelblue' : 'black',
		fontWeight: important ? 'bold' : 'normal',
	};

	return (
		<span className="todoListItem" style={style}>

			<span className="todo-list-item-label">
				{label}
			</span>

      <button
	      type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
	      type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
		</span>
	);
};

export default TodoListItem