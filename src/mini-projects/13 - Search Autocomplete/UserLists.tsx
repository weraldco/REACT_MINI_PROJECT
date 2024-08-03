type UsersDataT = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
};

type UserListsProps = {
	userdata: UsersDataT[];
	loading: boolean;
};
export default function UserLists({ userdata, loading }: UserListsProps) {
	return (
		<>
			<div className="grid place-items-center gap-2">
				{loading ? (
					<p>Loading data...</p>
				) : (
					userdata.map((user) => (
						<div className="grid bg-slate-400 w-52 p-2" key={user.id}>
							<div className="text-left bg-slate-400 w-full">
								{user.id}. {user.firstName} {user.maidenName} {user.lastName}
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
}
