import { useState } from 'react'

export const SearchBar = ({ input, setInput }) => {

	const handleChange = (value) => {
		setInput(value)
	}

	return(
		<div>
			<input placeholder="Type here to search"
			value={input}
			onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	)
}

export default SearchBar;