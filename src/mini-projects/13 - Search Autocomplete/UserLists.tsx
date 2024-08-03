import { useState } from 'react';

type UsersDataT = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
};

type UserListsProps = {
	filteredItem: UsersDataT[];
	handleClickUser: (id: number) => void;
};

export default function UserLists({
	filteredItem,
	handleClickUser,
}: UserListsProps) {
	return (
		<>
			<div className="grid gap-1">
				{filteredItem.map((user) => (
					<button
						key={user.id}
						className=" text-left"
						onClick={() => handleClickUser(user.id - 1)}
					>
						{user.firstName} {user.maidenName} {user.lastName}
					</button>
				))}
			</div>
			{/* <div>{usersData[user].firstName}</div> */}
		</>
	);
}
