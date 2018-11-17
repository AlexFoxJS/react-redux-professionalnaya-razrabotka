import React, {Component} from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

	state = {
		done: false,
	};

	clickOnLabel = () => {
		this.setState({
			done: true
		})
	};

	render() {
		const { label, important = false } = this.props;
		const { done } = this.state;

		const style = {
			color: important ? 'steelblue' : 'black',
			fontWeight: important ? 'bold' : 'normal',
		};

		let className = 'todoListItem';

		if (done) className += ' done';

		return (
			<span className={className} style={style}>

			<span
				className="todoListItemLabel"
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