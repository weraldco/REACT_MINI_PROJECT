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

export function useOutsideClick(ref, handler: () => void) {
	function listener() {
		if (!ref.current) return;
		return handler();
	}

	useEffect(() => {
		document.addEventListener('mousedown', listener);
	}, [ref, handler]);
}

export function useResponsiveSize() {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	function handleResize() {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}
	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowSize;
}
