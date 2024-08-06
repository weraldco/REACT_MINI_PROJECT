import { useEffect, useState } from 'react';
import { useFetchData } from './customHook';

export default function WeatherApp() {
	const [cityName, setCityName] = useState('');
	const [data, setData] = useState({});
	const apiKey = process.env.REACT_APP_API_URL;

	async function fetchData(url: string) {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	}

	function handleSearch() {
		const data = fetchData(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
		);
		setData(data);
	}
	console.log(data);
	return (
		<>
			<div className="bg-slate-900 h-screen grid place-items-center">
				<div className=" p-5">
					<div>
						<input
							className="bg-white p-3"
							type="text"
							placeholder="Enter city name.."
							value={cityName}
							onChange={(e) => {
								setCityName(e.target.value);
							}}
						/>
						<button
							className="bg-blue-500 p-3 text-white hover:bg-blue-400 transition-all"
							onClick={handleSearch}
						>
							Search
						</button>
					</div>
					{/* {loading ? <div>Loading data..</div> : <div>{data.name}</div>} */}
				</div>
			</div>
		</>
	);
}
