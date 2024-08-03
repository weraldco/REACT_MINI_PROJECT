import { useEffect, useMemo, useState } from 'react';
import UserLists from './UserLists';

type UsersDataT = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
};

export default function SearchAutocomplete() {
	const [usersData, setUsersData] = useState<UsersDataT[]>([]);
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);

	async function fetchUserData() {
		try {
			setLoading(true);
			const response = await fetch('https://dummyjson.com/users');
			const data = await response.json();
			setLoading(false);

			setUsersData(data.users);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchUserData();
	}, []);

	const filteredItem = useMemo(() => {
		return usersData.filter((user) => {
			return user.firstName.toLowerCase().includes(query.toLowerCase());
		});
	}, [usersData, query]);

	return (
		<>
			<div className="grid place-content-center p-5">
				<input
					className="bg-slate-300 px-4 py-2 rounded-full outline-none"
					type="text"
					placeholder="Search for.."
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
				{loading ? (
					<div>Loading data...</div>
				) : (
					<UserLists filteredItem={filteredItem} />
				)}
			</div>
		</>
	);
}
