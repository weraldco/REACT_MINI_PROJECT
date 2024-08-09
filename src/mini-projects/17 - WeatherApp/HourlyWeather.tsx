import { useEffect, useState } from 'react';

export default function HourlyWeather() {
	const [loading, setLoading] = useState(false);
	const [fiveDayWeatherData, setFiveDayWeatherData] = useState<[]>([]);
	const [data, setData] = useState<[]>([]);
	const [error, setError] = useState('');
	const apiKey = process.env.REACT_APP_API_URL;

	async function fetchData(url: string) {
		try {
			setLoading(true);
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();

				setData(data.list);
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

	useEffect(() => {
		fetchData(
			`https://api.openweathermap.org/data/2.5/forecast?lat=14.58986138351512&lon=120.98178900663554&appid=${apiKey}`
		);
	}, []);

	function getWeatherForFiveDay() {
		const storeData: string[] = [];
		const weatherData = [];
		data?.map((day) => {
			const [date, time] = day.dt_txt.split(' ');
			if (!storeData.includes(date)) storeData.push(date);
		});

		if (storeData !== undefined) {
			storeData.map((d) => {
				if (data.find((x) => x.dt_txt === d + ' 00:00:00') === undefined) {
					weatherData.push(data.find((x) => x.dt_txt === d + ' 09:00:00'));
				} else {
					weatherData.push(data.find((x) => x.dt_txt === d + ' 00:00:00'));
				}
			});
		}

		return weatherData;
	}

	if (data !== undefined) {
		getWeatherForFiveDay().map((d) => console.log(d));
	}

	return (
		<>
			<button className="p-5 bg-blue-500" onClick={() => {}}>
				Test
			</button>
		</>
	);
}
