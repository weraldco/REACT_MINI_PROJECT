import { useResponsiveSize } from './customHooks';

export default function WindowSizeChanged() {
	const size = useResponsiveSize();
	return (
		<>
			<div>
				<span>Height: {size.height} </span>
				<span>Width: {size.width} </span>
			</div>
		</>
	);
}
597;
