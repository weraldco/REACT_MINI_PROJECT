import { useContext } from 'react';
import Modal from '../11 - Modal/Modal';
import SearchAutocomplete from '../13 - Search Autocomplete/SearchAutocomplete';
import Tictactoe from '../14 - TicTacToe/Tictactoe';
import RandomColor from '../2 - Random Color Generator/RandomColorGenerator';
import SwitchTheme from '../8 - Switch Dark and Light/SwtichTheme';
import { FeatureFlagsContext } from './context';

export default function FeatureFlags() {
	type ComponentRenderT = {
		key: string;
		component: JSX.Element;
	};

	const contextData = useContext(FeatureFlagsContext);
	if (contextData === undefined) {
		throw new Error('Error');
	}

	const { loading, enabledFlags } = contextData;

	const componentToRender: ComponentRenderT[] = [
		{
			key: 'showSwitchDarkAndLight',
			component: <SwitchTheme />,
		},
		{
			key: 'showModal',
			component: <Modal />,
		},
		{
			key: 'showTicTacToe',
			component: <Tictactoe />,
		},
		{
			key: 'showRandomColor',
			component: <RandomColor />,
		},

		{
			key: 'showSearchAutoComplete',
			component: <SearchAutocomplete />,
		},
	];

	return (
		<>
			<div className="grid w-full">
				{loading ? (
					<div className="h-screen grid place-items-center ">
						Loading data..
					</div>
				) : (
					<div className="relative">
						<h1 className="text-3xl font-bold text-center">Feature Flags</h1>
						{componentToRender.map((component) => (
							<div key={component.key}>
								{enabledFlags[component.key] ? component.component : null}
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}
