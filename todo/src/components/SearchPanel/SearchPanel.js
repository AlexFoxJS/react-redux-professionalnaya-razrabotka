import React from 'react'
import './SearchPanel.css'

import ItemStatusFilter from '../ItemStatusFilter'

const SearchPanel = () => (
	<div className="searchPanel d-flex">

		<input
			className="form-control search-input"
			placeholder="type to search"
			type="text"
		/>

		<ItemStatusFilter />

	</div>
);

export default SearchPanel