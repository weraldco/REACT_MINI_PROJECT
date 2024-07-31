import { useEffect, useState } from 'react';

export default function useLocalStorage(key: string, defaultValue: string) {
	const [value, setValue] = useState<string>(() => {
		let currentValue: string;

		try {
			currentValue = JSON.parse(
				localStorage.getItem(key) || String(defaultValue)
			);
		} catch (error) {
			console.error('Error: ', error);
			currentValue = defaultValue;
		}

		return currentValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as const;
}
