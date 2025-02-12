import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { RootState } from './store';

export default function Counter() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div className="grid place-content-center gap-3">
				<h2 className="text-5xl text-center">{count}</h2>
				<div>
					<button
						onClick={() => dispatch(increment())}
						className="p-2 bg-blue-400 mr-2"
					>
						Increment
					</button>
					<button
						onClick={() => dispatch(decrement())}
						className="p-2 bg-blue-400"
					>
						Decrement
					</button>
				</div>
			</div>
		</>
	);
}
