import { useState } from 'react';
function Accordion() {
	const [selected, setSelected] = useState(-1);
	const [multiple, setMultiple] = useState<number[]>([]);
	const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

	const posts = [
		{
			id: 0,
			title: 'Lorem ipsum dolor ',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atnatus molestias, cum asperiores ratione laborum sequi ipsam quis beatae error perspiciatis odit magni deleniti porro atque cumque quaerat',
			open: false,
		},
		{
			id: 1,
			title: 'Cum asperiores ratione',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atnatus molestias, cum asperiores ratione laborum sequi ipsam quis beatae error perspiciatis odit magni deleniti porro atque cumque quaerat',
			open: false,
		},
		{
			id: 2,
			title: 'Magni deleniti',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atnatus molestias, cum asperiores ratione laborum sequi ipsam quis beatae error perspiciatis odit magni deleniti porro atque cumque quaerat',
			open: false,
		},
	];

	const [postsData, setPostsData] = useState(posts);

	function handleSingleSelection(id: number) {
		setSelected(id === selected ? -1 : id);
	}
	function handleMultipleSelection(id: number) {
		const copyMultiple = [...multiple];
		const currentIndex = copyMultiple.indexOf(id);

		currentIndex === -1
			? copyMultiple.push(id)
			: copyMultiple.splice(currentIndex, 1);

		setMultiple(copyMultiple);
	}

	function handleClickMultiple() {
		setEnableMultipleSelection((prev) => !prev);
	}
	return (
		<>
			<div className="flex flex-col w-80 gap-2">
				<ButtonHeader handleClick={handleClickMultiple} />

				{postsData.map((post) => (
					<AccordionData
						checkSelection={enableMultipleSelection}
						handleSingleSelection={handleSingleSelection}
						handleMultipleSelection={handleMultipleSelection}
						btnTitle={post.title}
						currentId={post.id}
						key={post.id}
					>
						{enableMultipleSelection
							? multiple.indexOf(post.id) !== -1 && post.content
							: selected === post.id && post.content}
					</AccordionData>
				))}
			</div>
		</>
	);
}

export default Accordion;
type ButtonProps = { handleClick: () => void };
function ButtonHeader({ handleClick }: ButtonProps) {
	return (
		<>
			<button className="header-btn" onClick={handleClick}>
				Enable Multi-Selection
			</button>
		</>
	);
}
type DemoProps = {
	children: string | boolean;
};
type AccordionProps = {
	checkSelection: boolean;
	children: string | boolean;
	btnTitle: string;
	currentId: number;
	handleSingleSelection(number: number): void;
	handleMultipleSelection(number: number): void;
};

function AccordionData({
	checkSelection,
	children,
	btnTitle,
	handleSingleSelection,
	handleMultipleSelection,
	currentId,
}: AccordionProps) {
	return (
		<>
			<div className="grid grid-cols-1">
				<button
					className="bg-slate-500  text-white p-2 text-left flex justify-between"
					onClick={() => {
						checkSelection
							? handleMultipleSelection(currentId)
							: handleSingleSelection(currentId);
					}}
				>
					{btnTitle} <span>+</span>
				</button>
				<Content>{children}</Content>
			</div>
		</>
	);
}

function Content({ children }: DemoProps) {
	return (
		<>
			<div className="bg-slate-300"> {children}</div>
		</>
	);
}
