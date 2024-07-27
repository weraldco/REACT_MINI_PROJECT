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
	console.log(currIdx);
	useEffect(() => {
		if (url && page && limit) {
			fetch(`${url}?page=${page}&limit=${limit}`)
				.then((response) => response.json())
				.then((data) => setImagesData(data))
				.catch((err) => console.error(err));
		}
	}, [url, page, limit]);

	function handleNextButton() {
		setCurrIdx(currIdx === imagesData.length - 1 ? 0 : currIdx + 1);
	}

	function handlePrevButton() {
		setCurrIdx(currIdx === 0 ? imagesData.length - 1 : currIdx - 1);
	}
	const currectData = imagesData.filter((_, i) => i === currIdx);

	return (
		<>
			<div className="container relative">
				<button
					className="cursor-pointer absolute left-0 top-2/4 text-slate-200"
					onClick={() => handlePrevButton()}
				>
					<BsArrowLeftCircleFill size={40} />
				</button>

				{currectData.map((img) => (
					<div key={img.id}>
						<img
							className="object-cover w-full h-full block"
							src={img.download_url}
						/>
					</div>
				))}
				<button
					className="absolute right-0 top-2/4 text-slate-200"
					onClick={() => handleNextButton()}
				>
					<BsArrowRightCircleFill size={40} />
				</button>
				<div className="flex gap-2 absolute z-50 bottom-2 left-1/3  text-center">
					{imagesData.map((_, i) => (
						<button
							key={i}
							className={i === currIdx ? 'circle current-circle' : 'circle'}
							onClick={() => setCurrIdx(i)}
						></button>
					))}
				</div>
			</div>
		</>
	);
}
