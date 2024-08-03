import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const url: string = 'https://dummyjson.com/products?limit=100';

	async function fetchData(getUrl: string) {
		try {
			setLoading(true);
			const response = await fetch(getUrl);
			const data = await response.json();

			if (data) {
				setProducts(data.products);
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
		}
	}

	function handleScrollChange() {
		const scrolled = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientScroll = document.documentElement.clientHeight;
		const currentHeight = Math.floor(
			(scrolled / (scrollHeight - clientScroll)) * 100
		);
		setScrollPercentage(currentHeight);
	}
	useEffect(() => {
		fetchData(url);
		// fetch('https://dummyjson.com/products?limit=100')
		// 	.then((response) => response.json())
		// 	.then((data) => setProducts(data.products))
		// 	.catch((error) => console.error(error));
	}, [url]);

	useEffect(() => {
		window.addEventListener('scroll', handleScrollChange);
		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);
	console.log(loading);
	return (
		<>
			<ProductsList products={products} scrollPercentage={scrollPercentage} />
		</>
	);
}
type ProductItems = {
	id: number;
	title: string;
};
type ProductsProps = {
	products: ProductItems[];
	scrollPercentage: number;
};

function ProductsList({ products, scrollPercentage }: ProductsProps) {
	return (
		<>
			<div className="grid place-items-center relative m-20">
				<div className="fixed z-50 p-5 bg-white left-0 right-0 top-0 grid place-content-center">
					<h1 className="text-4xl font-bold">Custom Scroll Indicator</h1>
					<div className="border-2 h-3 rounded-full">
						<div
							className="h-full bg-pink-500 rounded-2xl"
							style={{ width: `${scrollPercentage}%` }}
						></div>
					</div>
				</div>
				<ul>
					{products.map((product) => (
						<li className="bg-blue-300 p-3" key={product.id}>
							{product.id} : {product.title}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
