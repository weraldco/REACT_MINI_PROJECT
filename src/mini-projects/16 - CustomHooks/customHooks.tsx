import { useEffect, useState } from 'react';

type DataT = {
	id: number;
	todo: string;
	complete: boolean;
	userId: number;
};
export function useFetchData(url: string) {
	const [data, setData] = useState<DataT[]>([]);
	const [loading, setLoading] = useState(false);

	async function fetchData() {
		try {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();

			setData(data.todos);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return { data, loading };
}

export function useOutsideClick(ref, handler) {
	function listener(event) {
		if (!ref.current) return;
		return handler(event);
	}
	console.log(handler);
	console.log(ref);

	useEffect(() => {
		document.addEventListener('mousedown', listener);
	}, [ref, handler]);
}
