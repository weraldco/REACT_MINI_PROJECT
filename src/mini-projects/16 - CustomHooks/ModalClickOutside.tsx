import { useRef, useState } from 'react';
import { useOutsideClick } from './customHooks';

export default function ModalClickOutside() {
	const [openModal, setOpenModal] = useState(false);
	const divRef = useRef();

	useOutsideClick(divRef, () => {
		setOpenModal(false);
	});

	return (
		<>
			<div className="w-full h-full bg-gray-400">
				<h1 className="text-3xl font-bold">Click Outside Close</h1>
				<button
					className="bg-blue-500 p-3 text-white rounded-md hover:bg-blue-400 transition-all"
					onClick={() => setOpenModal((prev) => !prev)}
				>
					Open Modal
				</button>
				{openModal ? (
					<div className="grid place-items-center">
						<div className="w-1/2 absolute bg-white opacity-100 px-5 pb-16 pt-5 rounded-md z-50">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
							inventore architecto officiis quibusdam totam omnis eum distinctio
							amet molestiae aut quod quas pariatur delectus excepturi
							cupiditate, quam sit numquam? Mollitia. Lorem ipsum dolor sit
							amet, consectetur adipisicing elit. Voluptas sequi modi doloribus
							eos mollitia, quaerat culpa accusantium cum tenetur tempore
							incidunt odit soluta, eius voluptates earum laboriosam
							repellendus. Facere, temporibus.{' '}
							<button
								className="bg-yellow-400 p-1 rounded-md text-sm hover:bg-yellow-300 absolute bottom-3 right-3 "
								onClick={() => setOpenModal(false)}
							>
								Close Modal
							</button>
						</div>
						<div
							ref={divRef}
							className="absolute bg-black opacity-55 top-0 left-0 right-0 bottom-0 z-10"
						></div>
					</div>
				) : null}
			</div>
		</>
	);
}
