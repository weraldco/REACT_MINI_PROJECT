import { useEffect, useState } from 'react';

export default function HourlyWeather() {
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

	useEffect(() => {
		fetchData(
			`https://api.openweathermap.org/data/2.5/onecall?lat=14.58986138351512&lon=120.98178900663554&exclude=current,minutely,hourly,alerts&appid=837aa0f0761a8644e2a8f53ccd5e2529&units=metric`
		);
	}, []);

	console.log(data);
	return <></>;
}
