import { useState } from 'react';

export default function Modal() {
	const [modalOpen, setModalOpen] = useState(false);
	function handleModalClick() {
		setModalOpen((prev) => !prev);
	}

	return (
		<>
			<div className="grid place-items-center">
				<button
					onClick={handleModalClick}
					className="bg-blue-500 p-2 text-white rounded"
				>
					Open Modal
				</button>
				{modalOpen && <ModalContainer handleModalClick={handleModalClick} />}
			</div>
		</>
	);
}

type ModalContainerProps = {
	handleModalClick: () => void;
};

function ModalContainer({ handleModalClick }: ModalContainerProps) {
	return (
		<>
			<div className="bg-gray-400 opacity-50 absolute left-0 right-0 top-0 bottom-0">
				a
			</div>
			<div className="bg-white p-5 w-3/4 z-50 absolute">
				<h1 className="text-2xl font-bold -scroll-mb-3">
					This is modal section
				</h1>
				<div className="pb-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, porro
					cumque. Odio quisquam harum autem, possimus distinctio quam
					aspernatur, ea tenetur officia omnis amet ut labore? Quibusdam porro
					fugiat exercitationem. <br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					repudiandae laboriosam fuga excepturi! Ipsum ipsa optio aliquam iste
					dolorem nesciunt reiciendis rerum consequuntur veniam deleniti. Ipsam
					excepturi consectetur tenetur aut!
					<button
						onClick={handleModalClick}
						className="bg-yellow-300 p-2 text-xs rounded-lg absolute right-0 bottom-0"
					>
						Close Modal
					</button>
				</div>
			</div>
		</>
	);
}
