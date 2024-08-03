type UsersDataT = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
};

type UserListsProps = {
	filteredItem: UsersDataT[];
};

export default function UserLists({ filteredItem }: UserListsProps) {
	return (
		<>
			<div className="grid gap-2 mt-5">
				{filteredItem.map((user) => (
					<div key={user.id} className="bg-blue-200 p-2">
						{user.id}. {user.firstName} {user.maidenName} {user.lastName}
					</div>
				))}
			</div>
		</>
	);
}
