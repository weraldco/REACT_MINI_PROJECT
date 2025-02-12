/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

export default function WindowSizeChanged() {
	const size = useWindowResize();
	return (
		<>
			<div>
				<span>Height: {size.width} px </span>
				<span>Width: {size.height} px </span>
			</div>
		</>
	);
}

const useWindowResize = () => {
	const [windowSize, setWindowSize] = useState<{
		width: number | undefined;
		height: number | undefined;
	}>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleRezize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleRezize);

		handleRezize();

		return () => window.removeEventListener('resize', handleRezize);
	}, []);
	return windowSize;
};
