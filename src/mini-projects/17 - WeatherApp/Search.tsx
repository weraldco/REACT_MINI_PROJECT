import { useState } from 'react';

type SearchProps = {
	handleSearch: (cityName: string) => void;
};

export default function Search({ handleSearch }: SearchProps) {
	const [cityName, setCityName] = useState('');
	return (
		<>
			<div className="w-full">
				<input
					className="bg-white p-3 w-9/12"
					type="text"
					placeholder="Enter city name.."
					value={cityName}
					onChange={(e) => {
						setCityName(e.target.value);
					}}
				/>
				<button
					className="bg-blue-500 p-3 text-white hover:bg-blue-400 transition-all w-1/4"
					onClick={() => handleSearch(cityName)}
				>
					Search
				</button>
			</div>
		</>
	);
}
