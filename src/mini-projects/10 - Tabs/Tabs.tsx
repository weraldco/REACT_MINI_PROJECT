import { useEffect, useState } from 'react';
type DataTypeT = {
	body: string;
	id: number;
	title: string;
};
export default function Tabs() {
	const [data, setData] = useState<DataTypeT[]>([]);
	const [activeTab, setActiveTab] = useState(0);
	const url = 'https://jsonplaceholder.typicode.com/posts';

	async function fetchData(getUrl: string) {
		const response = await fetch(getUrl);
		const data = await response.json();
		setData(data.splice(0, 5));
	}

	useEffect(() => {
		fetchData(url);
	}, [url]);
	return (
		<>
			<div className="grid grid-cols-5 p-5 gap-2 ">
				<Tab
					postData={data}
					handleClick={(id) => setActiveTab(id)}
					activeTab={activeTab}
				/>
				<TabResult postData={data} activeTab={activeTab} />
			</div>
		</>
	);
}

type PostDataProps = {
	postData?: DataTypeT[];
	handleClick: (id: number) => void;
	activeTab: number;
};

type TabResultProps = {
	postData: DataTypeT[];
	activeTab: number;
};
function Tab({ postData, handleClick, activeTab }: PostDataProps) {
	return (
		<>
			{postData?.map((post) => (
				<button
					className="bg-blue-500 w-full h-full p-2 transition-all"
					style={{
						background: `${post.id === activeTab ? 'rgb(102, 175, 243)' : ''}`,
					}}
					key={post.id}
					onClick={() => {
						handleClick(post.id - 1);
					}}
				>
					Tab {post.id}
				</button>
			))}
		</>
	);
}

function TabResult({ postData, activeTab }: TabResultProps) {
	return (
		<>
			<div className="bg-blue-200 col-span-5 p-5 ">
				<h1 className="text-2xl font-bold pb-5">
					{postData[activeTab] && postData[activeTab].title}
				</h1>
				<div>{postData[activeTab] && postData[activeTab].body}</div>
			</div>
		</>
	);
}
