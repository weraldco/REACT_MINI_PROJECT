import { useEffect, useState } from 'react';
import GithubProfileResult from './GithubProfileResult';
type UserdataT = {
	avatar_url: string;
	html_url: string;
	name: string;
	email: string;
	public_repos: number;
};
export default function GithubProfile() {
	const [username, setUsername] = useState('');
	const [userdata, setUserdata] = useState<UserdataT>();
	const [userURL, setUserURL] = useState('');
	const [loading, setLoading] = useState(false);

	function handleSearchUser() {
		setUserURL(`https://api.github.com/users/${username}`);
	}

	async function fetchData(url: string) {
		if (url) {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();

			setUserdata(data);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData(userURL);
	}, [userURL]);

	if (loading) {
		return <h1> Loading data..</h1>;
	}
	return (
		<>
			<div className="grid place-content-center m-10 ">
				<div className="w-full flex gap-2 mb-10 ">
					<input
						type="text"
						className="bg-slate-200 b-2 p-2 w-3/4"
						placeholder="Enter Github username.."
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button
						className="bg-blue-500 text-white p-2 hover:bg-blue-400 active:bg-blue-500 transition-all w-1/4"
						onClick={() => {
							handleSearchUser();
						}}
					>
						Search
					</button>
				</div>

				{userdata && <GithubProfileResult userdata={userdata} />}
			</div>
		</>
	);
}
