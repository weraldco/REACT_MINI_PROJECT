import { useState } from 'react';

export default function Themes() {
	const themesOptions = ['light', 'dark', 'normal'];
	const [selectedTheme, setSelectedTheme] = useState('light');
	return (
		<>
			<div>
				<ThemesOptions
					selectedTheme={selectedTheme}
					themesOptions={themesOptions}
					onThemeClick={(theme) => setSelectedTheme(theme)}
				/>
				<span>
					You're theme is <strong>{selectedTheme}</strong>
				</span>
			</div>
		</>
	);
}

type ThemesOptionsProps<T> = {
	themesOptions: T[];
	selectedTheme: T;
	onThemeClick: (theme: T) => void;
};

function ThemesOptions<T extends React.ReactNode>({
	themesOptions,
	selectedTheme,
	onThemeClick,
}: ThemesOptionsProps<T>) {
	return (
		<>
			<ul>
				{themesOptions.map((theme, index) => (
					<li className="list-disc bg-transparent text-2xl" key={index}>
						<button
							className={
								selectedTheme === theme
									? 'font-bold transition-all delay-100'
									: ''
							}
							onClick={() => onThemeClick(theme)}
						>
							{theme}
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
