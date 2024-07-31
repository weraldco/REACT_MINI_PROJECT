// import { useState } from 'react';

import useLocalStorage from './useLocalStorage';

// export default function SwitchTheme() {
// 	const [theme, setTheme] = useState('light');
// 	console.log(theme);
// 	return (
// 		<>
// 			<div className={`${theme} grid place-items-center h-svh`}>
// 				<h1 className="text-xl">Switch Themes Dark/Light</h1>
// 				<button
// 					className="p-3 bg-blue-500 text-white rounded-full"
// 					onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
// 				>
// 					Switch to Dark
// 				</button>
// 			</div>
// 		</>
// 	);
// }

export default function SwitchTheme() {
	const [theme, setTheme] = useLocalStorage('theme', 'dark');

	function handleChangeTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}
	return (
		<>
			<div
				className={`${theme} grid place-items-center h-svh 
            transition-all duration-700`}
			>
				<h1 className="text-xl">Switch Themes Dark/Light</h1>
				<button
					className="p-3 bg-blue-500 text-white rounded-full"
					onClick={handleChangeTheme}
				>
					Change Theme
				</button>
			</div>
		</>
	);
}
