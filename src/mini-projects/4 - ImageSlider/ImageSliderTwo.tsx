import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

type ImageSliderProps = {
	url: string;
	page: number;
	limit: number;
};

export default function ImageSlider({ url, page, limit }: ImageSliderProps) {
	type Images = {
		id: number;
		author: string;
		width: number;
		height: number;
		url: string;
		download_url: string;
	};

	const [imagesData, setImagesData] = useState<Images[]>([]);
	const [currIdx, setCurrIdx] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (url && page && limit) {
			setLoading(true);
			fetch(`${url}?page=${page}&limit=${limit}`)
				.then((response) => response.json())
				.then((data) => {
					setImagesData(data);
					setLoading(false);
				})
				.catch((err) => {
					console.error(err);
					setLoading(false);
				});
		}
	}, [url, page, limit]);

	function handleNextButton() {
		setCurrIdx(currIdx === imagesData.length - 1 ? 0 : currIdx + 1);
	}

	function handlePrevButton() {
		setCurrIdx(currIdx === 0 ? imagesData.length - 1 : currIdx - 1);
	}
	console.log(loading);
	if (loading) {
		return <p>Loading..</p>;
	}
	return (
		<>
			<div
				style={{
					maxWidth: '1200px',
					width: '100%',
					margin: '0 auto',
				}}
			>
				<div
					className="relative"
					style={{
						aspectRatio: '10 / 6',
					}}
				>
					<button
						className="cursor-pointer absolute left-0 top-2/4 text-slate-200 z-50"
						onClick={() => handlePrevButton()}
					>
						<BsArrowLeftCircleFill size={40} />
					</button>
					<div className="flex w-full h-full overflow-hidden">
						{loading ? (
							<p>Loading...</p>
						) : (
							imagesData.map((img) => (
								<img
									key={img.id}
									className="object-cover w-full h-full block flex-shrink-0  flex-grow-0 duration-300 ease-in-out"
									style={{
										translate: `${-100 * currIdx}%`,
									}}
									src={img.download_url}
								/>
							))
						)}
					</div>

					<button
						className="absolute right-0 top-2/4 text-slate-200"
						onClick={() => handleNextButton()}
					>
						<BsArrowRightCircleFill size={40} />
					</button>

					<div className="flex gap-2 absolute z-50 bottom-2 left-1/2 -translate-x-1/2">
						{imagesData.map((_, i) => (
							<button
								key={i}
								className={i === currIdx ? 'circle current-circle' : 'circle'}
								onClick={() => setCurrIdx(i)}
							></button>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
