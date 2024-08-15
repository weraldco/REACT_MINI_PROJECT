import { RootState } from '@reduxjs/toolkit/query';
import { useState } from 'react';
import { useSelector, UseSelector } from 'react-redux';

export default function Login() {
	const username = useSelector((state: RootState) => state.username.value);
	const [name, setName] = useState('');
	return (
		<>
			<input
				className="p-2 bg-slate-200"
				placeholder="Enter your username.."
				type="text"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button onClick={} className="p-2 bg-blue-400">
				Login
			</button>
			<button className="p-2 bg-red-400">Logout</button>
		</>
	);
}
