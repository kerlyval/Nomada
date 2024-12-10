import { useRef } from 'react';

function Search({ setResult }) {
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setResult(inputRef.current.value.trim().toLowerCase());
		inputRef.current.value = '';
	};

	return (
		<form onSubmit={handleSubmit} className="w-full md:w-fit">
			<div className="input-form flex items-center gap-4">
				<input
					ref={inputRef}
					type="text"
					className=" w-full py-1 px-2 focus:outline-none"
					placeholder="Write your next destination here"
				/>
				<button className="btn bg-cyan-600">Search</button>
			</div>
		</form>
	);
}

export default Search;
