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
	const [userId, setUserId] = useState(-1);

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

	function handleClickUser(id: number) {
		setUserId(id);
		setQuery('');
	}

	return (
		<>
			<div className="grid place-content-center p-5">
				<input
					className="bg-slate-300 px-4 py-2 rounded-full outline-none"
					type="text"
					placeholder="Search an user.."
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
				{query.length > 0 ? (
					loading ? (
						<div>Loading data...</div>
					) : (
						<UserLists
							filteredItem={filteredItem}
							handleClickUser={handleClickUser}
						/>
					)
				) : null}
				{userId !== -1 && <UserDetails usersData={usersData[userId]} />}
			</div>
		</>
	);
}

type UserDetailsProps = {
	usersData: UsersDataT;
};
function UserDetails({ usersData }: UserDetailsProps) {
	return (
		<>
			<div className="text-xl font-bold ">
				{usersData.firstName} {usersData.maidenName} {usersData.lastName}
			</div>
		</>
	);
}
