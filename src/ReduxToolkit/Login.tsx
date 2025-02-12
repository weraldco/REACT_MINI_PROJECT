import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { login, logout } from './userSlice';
export default function Login() {
	const userState = useSelector((state: RootState) => state.user.username);
	const dispatch = useDispatch();
	const [name, setName] = useState<string>('');
	return (
		<>
			<div>
				<h1 className="text-3xl font-bold">Welcome to back {userState}</h1>
				<input
					className="p-2 bg-slate-200"
					type="text"
					placeholder="Enter your username.."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button
					onClick={() => {
						dispatch(login({ username: name }));
						setName('');
					}}
					className="p-2 bg-blue-400"
				>
					Login
				</button>
				<button
					onClick={() => {
						dispatch(logout());
						setName('');
					}}
					className="p-2 bg-red-400"
				>
					Logout
				</button>
			</div>
		</>
	);
}
