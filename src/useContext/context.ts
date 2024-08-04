import { createContext, useContext } from 'react';
import { User } from './Demo';

export const DashboardContext = createContext<User | undefined>(undefined);

export function userUserContext() {
	const user = useContext(DashboardContext);
	if (user === undefined) {
		throw new Error('User is undefined and cannot continue.');
	}
	return user;
}
