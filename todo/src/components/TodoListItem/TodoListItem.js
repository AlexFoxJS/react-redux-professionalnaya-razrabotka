import React, {Component} from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

	state = {
		done: false,
		important: false,
	};

	clickOnLabel = () => {
		this.setState(({done}) => ({
			done: !done
		}))
	};

	onMarkImportant = () => {
		this.setState(({important}) => ({
			important: !important
		}))
	};

	render() {
		const { label } = this.props;
		const { done, important } = this.state;

		let className = 'todoListItem';

		if (done) className += ' done';
		else if (important) className += ' important';

		return (
			<span className={className}>

			<span
				className="todoListItemLabel"
				onClick={this.clickOnLabel}
			>
				{label}
			</span>

      <button
	      type="button"
	      className="btn btn-outline-success btn-sm float-right"
	      onClick={this.onMarkImportant}
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