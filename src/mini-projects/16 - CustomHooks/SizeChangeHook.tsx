import { useEffect, useState } from 'react';

export default function WindowSizeChanged() {
	const [xSize, setXSize] = useState(document.documentElement.clientWidth);
	const [ySize, setYSize] = useState(document.documentElement.clientHeight);

	// useEffect(() => {}, []);
	return (
		<>
			<div>
				<span>Height: {ySize} </span>
				<span>Width: {xSize} </span>
			</div>
		</>
	);
}
597;
