import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { RootState } from './store';

export default function Counter() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<h2>{count}</h2>
				<div>
					<button onClick={() => dispatch(increment())}>Increment</button>
					<button onClick={() => dispatch(decrement())}>Decrement</button>
				</div>
			</div>
		</>
	);
}
