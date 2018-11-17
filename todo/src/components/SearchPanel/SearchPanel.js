import React from 'react'
import './SearchPanel.css'

const SearchPanel = () => (
	<div className="searchPanel d-flex">

		<input
			className="form-control search-input"
			placeholder="type to search"
			type="text"
		/>

		<div className="btn-group">
			<button
				type="button"
				className="btn btn-info"
			>
				All
			</button>

			<button
				type="button"
				className="btn btn-outline-secondary"
			>
				Active
			</button>

			<button
				type="button"
				className="btn btn-outline-secondary"
			>
				Done
			</button>

		</div>

	</div>
);

export default SearchPanel