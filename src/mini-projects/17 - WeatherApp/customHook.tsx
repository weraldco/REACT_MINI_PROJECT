import { useEffect, useState } from 'react';

export function useFetchData(url: string) {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	async function fetchData() {
		try {
			setLoading(true);
			const response = await fetch(url);
			if (response.ok) {
				const dataFetched = await response.json();
				setData(dataFetched);
				setLoading(false);
			} else {
				setError(response.ok);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return [data, loading, error];
}
