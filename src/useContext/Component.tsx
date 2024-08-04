import { userUserContext } from './context';

export function Sidebar() {
	const user = userUserContext();
	return (
		<>
			<div>
				<div>Hi {user.name}</div>
				<div>Subscribe Status: {user.isSubscribe ? 'Yes' : 'No'}</div>
			</div>
		</>
	);
}

export function Profile() {
	const user = userUserContext();
	return (
		<>
			<div>{user.name}</div>
		</>
	);
}
