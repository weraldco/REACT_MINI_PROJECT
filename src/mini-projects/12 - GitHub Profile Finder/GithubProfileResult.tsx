type UserdataT = {
	avatar_url: string;
	html_url: string;
	name: string;
	email: string;
	public_repos: number;
	created_at: string;
};

type GithubProfileResultProps = {
	userdata: UserdataT;
};

export default function GithubProfileResult({
	userdata,
}: GithubProfileResultProps) {
	const {
		html_url,
		avatar_url,
		name,
		email,
		public_repos,
		created_at,
	}: UserdataT = userdata;

	const dateJoined = new Date(created_at);
	return (
		<>
			<div className="grid place-items-center">
				<div className=" w-1/2">
					<a href={html_url}>
						<img className="" src={avatar_url} alt={html_url} />
					</a>
				</div>
				<div>
					<span>Name: </span>
					<span>{name}</span>
				</div>

				<div>
					<span>Public Repositories: </span>
					<span>{public_repos}</span>
				</div>
				<div>
					<span>Joined: </span>
					<span>
						{dateJoined.toLocaleDateString('en', {
							day: '2-digit',
							month: 'short',
							year: 'numeric',
						})}
					</span>
				</div>
			</div>
		</>
	);
}
