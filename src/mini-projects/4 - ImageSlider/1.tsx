// import { useEffect, useState } from 'react';

// type ImageSliderProps = {
// 	url: string;
// 	page: number;
// 	limit: number;
// };
// export default function ImageSlider({ url, page, limit }: ImageSliderProps) {
// 	const [imagesData, setImagesData] = useState([]);

// 	// https://picsum.photos/v2/list?page=1&limit=10

// 	console.log(`${url}?page=${page}&limit=${limit}`);

// 	// useEffect(() => {
// 	// 	if (getPokemon && pokemonName) {
// 	// 		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.current}`)
// 	// 			.then((response) => response.json())
// 	// 			.then((data) => setPokemonData(data))
// 	// 			.catch((err) => {
// 	// 				console.log('Caught an error', err);
// 	// 			});
// 	// 	}
// 	// }, [getPokemon]);

// 	// console.log(imagesData);
// 	return (
// 		<>
// 			<div className="w-full h-full">
// 				{/* <img
// 					className="object-cover w-full h-full block"
// 					src={images[imagesIndex].url}
// 				/> */}
// 				<button>prev</button>

// 				<button>next</button>
// 			</div>
// 		</>
// 	);
// }

// type UseFecthProps = {
// 	url: string;
// 	page: number;
// 	limit: number;
// };

// function useFetch({ url, page, limit }: UseFecthProps) {}
