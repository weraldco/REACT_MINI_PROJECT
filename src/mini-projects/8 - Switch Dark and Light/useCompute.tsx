import { useEffect, useState } from 'react';

export default function useCompute(defaultValue: number) {
	const [value, setValue] = useState(defaultValue | 0);

	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	return [value, setValue] as const;
}
