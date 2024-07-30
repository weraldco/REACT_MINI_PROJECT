import { useEffect, useState } from 'react';

type TProducts = {
	id: number;
	title: string;
	price: number;
	images: string;
};

type UseFetchProps = {
	limit: number;
};
export default function LoadMore({ limit }: UseFetchProps) {
	const [products, setProducts] = useState<TProducts[]>([]);
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(1);

	useEffect(() => {
		if (limit && count) {
			setLoading(true);

			fetch(
				`https://dummyjson.com/products?limit=${limit}&skip=${
					count === 1 ? 1 : count * 20
				}&select=title,price,images`
			)
				.then((response) => response.json())
				.then((data) => {
					setProducts(data.products);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setLoading(false);
				});
		}
	}, [limit, count]);

	return (
		<>
			{loading ? (
				<p>Loading..</p>
			) : (
				<div className="grid gap-4 p-4 place-items-center">
					<ProductsList products={products} />
					<button
						onClick={() => setCount((c) => c + 1)}
						className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-400 active:bg-blue-500"
					>
						Load more
					</button>
				</div>
			)}
		</>
	);
}

type ProductListProps = {
	products: TProducts[];
};
function ProductsList({ products }: ProductListProps) {
	return (
		<>
			<div className="grid  grid-cols-4 gap-4 p-4">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</>
	);
}
type ProductItemProps = {
	product: TProducts;
};
function ProductItem({ product }: ProductItemProps) {
	return (
		<>
			<div className="p-5 bg-slate-200 ">
				<h1>{product.title}</h1>
				<span>$ {product.price}</span>
				<img src={product.images[0]} alt="" />
			</div>
		</>
	);
}
