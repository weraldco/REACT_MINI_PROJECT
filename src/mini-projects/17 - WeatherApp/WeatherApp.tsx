import { useState } from 'react';
import Search from './Search';
import WeatherData from './WeatherData';

export type DataT = {
	name: string;
	main: { temp: number; humidity: number };
	weather: [{ main: string; description: string }];
	wind: { speed: number };
};
export default function WeatherApp() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<number>();
	const [data, setData] = useState<DataT | undefined>(undefined);
	const apiKey = process.env.REACT_APP_API_URL;

	async function fetchData(url: string) {
		try {
			setLoading(true);
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();

				setData(data);
				setLoading(false);
			} else {
				setError(response.status);
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			throw new Error('Cannot retrieve the data..');
		}
	}

	function handleSearch(cityName: string) {
		setData(undefined);
		fetchData(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
		);
	}
	console.log(data);
	return (
		<>
			<div className="bg-slate-900 h-screen grid place-items-center">
				<div className="grid place-items-center w-80 ">
					<Search handleSearch={handleSearch} />
					{loading ? (
						<span className="text-white mt-10">Loading data..</span>
					) : (
						<div>
							{data !== undefined ? (
								<WeatherData data={data} />
							) : (
								<>
									{error === 404 ? (
										<div className="mt-5 bg-red-300 p-5 w-80">
											Error 404: Cannot retrieved the data, unknown city. Please
											try again
										</div>
									) : null}
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
