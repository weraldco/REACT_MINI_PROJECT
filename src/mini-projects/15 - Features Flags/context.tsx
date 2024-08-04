import { createContext, useEffect, useState } from 'react';
import FlagFeatureServiceCall from './data';

export type State = {
	loading: boolean;
	enabledFlags: Record<string, boolean>;
};
export const FeatureFlagsContext = createContext<State | undefined>(undefined);

type FeatureFlagGlobalStateProps = {
	children: JSX.Element;
};

export default function FeatureFlagGlobalState({
	children,
}: FeatureFlagGlobalStateProps) {
	const [loading, setLoading] = useState(false);
	const [enabledFlags, setEnabledFlags] = useState({});

	async function fetchFeatureFlags(): Promise<void> {
		try {
			setLoading(true);
			const response = await FlagFeatureServiceCall();
			setEnabledFlags(response);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
			throw new Error('Cannot get the data you are trying to fetch.');
		}
	}

	useEffect(() => {
		fetchFeatureFlags();
	}, []);

	return (
		<>
			<FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
				{children}
			</FeatureFlagsContext.Provider>
		</>
	);
}
