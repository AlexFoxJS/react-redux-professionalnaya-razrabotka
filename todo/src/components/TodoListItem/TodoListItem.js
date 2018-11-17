import React, {Component} from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

	clickOnLabel = () => {
		console.log(`Done: ${this.props.label}`)
	};

	render() {
		const { label, important = false } = this.props;

		const style = {
			color: important ? 'steelblue' : 'black',
			fontWeight: important ? 'bold' : 'normal',
		};

		return (
			<span className="todoListItem" style={style}>

			<span
				className="todo-list-item-label"
				onClick={this.clickOnLabel}
			>
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
	}
}