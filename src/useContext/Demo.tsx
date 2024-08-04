import { useState } from 'react';
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

export type User = {
	isSubscribe: boolean;
	name: string;
};

export default function Demo() {
	const [user] = useState<User>({
		isSubscribe: true,
		name: 'You',
	});
	return (
		<>
			<div>
				<DashboardContext.Provider value={user}>
					<Dashboard />
					<p>{user.name}</p>
				</DashboardContext.Provider>
			</div>
		</>
	);
}
