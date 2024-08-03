import { useEffect, useState } from 'react';
import UserLists from './UserLists';

type UsersDataT = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
};

export default function SearchAutocomplete() {
	const [usersData, setUsersData] = useState<UsersDataT[]>([]);
	const [searchStr, setSearchStr] = useState('');
	const [loading, setLoading] = useState(false);

	async function fetchData() {
		try {
			setLoading(true);
			const response = await fetch('https://dummyjson.com/users');
			const data = await response.json();

			setUsersData(data.users);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	// if (searchStr && searchStr.length > 0) {
	// 	const copyUserData = [...usersData];
	// 	const newData = copyUserData.filter((user) =>
	// 		user.firstName.includes(searchStr)
	// 	);
	// 	// setUsersData(newData);
	// }

	function handleChange(e) {
		setSearchStr(e.target.value);
		const copyUserData = [...usersData];
		const newData = copyUserData.filter((user) =>
			user.firstName.toLowerCase().includes(searchStr)
		);
	}

	console.log(searchStr);
	return (
		<>
			<div className="grid place-items-center p-5">
				<input
					className="bg-slate-200 px-4 py-2 rounded-xl outline-none"
					placeholder="Enter a text.."
					type="text"
					value={searchStr}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<UserLists userdata={usersData} loading={loading} />
		</>
	);
}
