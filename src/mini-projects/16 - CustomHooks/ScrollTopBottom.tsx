import { useRef } from 'react';
import FetchCustomHook from './FetchCustomHook';

export default function ScrollTopBottom() {
	const bottomSection = useRef();
	const topSection = useRef();

	function handleClick(ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}
	return (
		<>
			<div className="grid place-items-center p-5">
				<button
					ref={topSection}
					className="p-2 rounded bg-green-500 text-white"
					onClick={() => handleClick(bottomSection)}
				>
					Scroll to bottom
				</button>
				<FetchCustomHook />
				<button
					ref={bottomSection}
					className="p-2 rounded bg-green-500 text-white"
					onClick={() => handleClick(topSection)}
				>
					Scroll to Top
				</button>
			</div>
		</>
	);
}
