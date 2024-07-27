import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
export default function StarRating({ noOfStars = 5 }) {
	const [rating, setRating] = useState(1);
	const [hover, setHover] = useState(0);
	function handleClick(id: number) {
		setRating(id);
	}
	function handleMouseMove(id: number) {
		setHover(id);
	}
	function handleMouseLeave() {
		setHover(rating);
	}
	return (
		<>
			<div className="grid grid-flow-col-dense">
				{[...Array(noOfStars)].map((_, index) => {
					index += 1;
					return (
						<FaStar
							key={index}
							className={index <= (hover || rating) ? 'active' : 'inactive'}
							onClick={() => handleClick(index)}
							onMouseMove={() => handleMouseMove(index)}
							onMouseLeave={() => handleMouseLeave()}
							size={40}
						/>
					);
				})}
				<br />
			</div>
			<p className="grid justify-center text-4xl">
				Rating {rating}/{noOfStars}
			</p>
		</>
	);
}
