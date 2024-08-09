import { useEffect, useState } from 'react';

export default function WeeklyWeather() {
	type ListType = {
		dt_txt: string;
	};

	type DataTypes = {
		list: ListType;
	};

	const [weatherData, setWeatherData] = useState<DataTypes[]>([]);
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState('');
	const apiKey = process.env.REACT_APP_API_URL;
	const [error, setError] = useState('');

	// Collection of date
	const [storeData, setStoreData] = useState<string[]>(
		new Array(5).fill(null).map((_, i) => {
			const currentDate = new Date();
			currentDate.setDate(currentDate.getDate() + i);

			const newDate = `${currentDate.getUTCFullYear()}-${padZero(
				currentDate.getMonth() + 1
			)}-${padZero(currentDate.getDate())}`;

			return newDate;
		})
	);

	// Function for adding zero in number
	function padZero(num: number) {
		return num < 9 ? '0' + num : num;
	}

	// Fetch data from api
	async function fetchWeatherData(city: string) {
		try {
			setLoading(true);
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
			);
			if (response.ok) {
				const data: DataTypes[] = await response.json();

				// Set the value of state weather data
				setWeatherData(
					storeData.map((d) => {
						const [date, time] = data.list[0].dt_txt.split(' ');
						const currDate = `${d} ${time}`;
						const weekData = data.list.find((x) => x.dt_txt === currDate);

						if (weekData !== undefined) {
							return weekData;
						} else {
							return data.list[0];
						}
					})
				);
			} else {
				setError('404: Cannot retrieve the data');
			}
			setLoading(false);
		} catch (error) {
			setLoading(false);
			throw new Error('Cannot retrieve the data');
		}
	}

	function handleClick() {
		fetchWeatherData(query);
	}
	console.log(weatherData);

	return (
		<>
			{error ? (
				<div>404: Cannot retrieve the data. Please try again..</div>
			) : loading ? (
				<div>Loading data</div>
			) : (
				<div>
					<ul className="grid grid-cols-5 ">
						{weatherData.map((d) => (
							<li className="grid place-items-center w-16 " key={d.dt}>
								<img
									src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
									alt=""
								/>
								<div>{d.main.temp}&deg;</div>
							</li>
						))}
					</ul>
					<input
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
						type="text"
					/>
					<button onClick={handleClick}>Clickhere</button>
				</div>
			)}
		</>
	);
}
