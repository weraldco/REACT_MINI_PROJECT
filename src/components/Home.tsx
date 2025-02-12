import { FC } from 'react';

interface Props {}

const Home: FC<Props> = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen   ">
			<div className="text-2xl font-bold">Welcome Home</div>
			<span className="w-[600px] text-center">
				This is all my react mini-projects, I made this for practicing my coding
				skill using react . All project is in the sidebar.
			</span>
		</div>
	);
};

export default Home;
