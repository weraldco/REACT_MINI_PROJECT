import { useFetchData } from './customHooks';

export default function FetchCustomHook() {
	const { loading, data } = useFetchData(
		'https://dummyjson.com/todos?limit=100'
	);
	return (
		<>
			<div className="grid place-items-center">
				<h1 className="text-3xl font-bold">useFetch Custom hook</h1>
				{loading ? (
					<div>Loading data..</div>
				) : (
					data.map((todo) => <div key={todo.id}> {todo.todo}</div>)
				)}
			</div>
		</>
	);
}
