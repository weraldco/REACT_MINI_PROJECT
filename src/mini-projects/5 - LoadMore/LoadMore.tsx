import { useEffect, useState } from 'react';
// {"id":11,"title":"Annibale Colombo Bed","price":1899.99}
type TProducts = {
	id: number;
	title: string;
	price: number;
};

type Result = {
	limit: number;
	product: TProducts[];
	skip: number;
	total: number;
};

type UseFetchProps = {
	limit: number;
	skip: number;
};
export default function LoadMore({ limit, skip }: UseFetchProps) {
	const [products, setProducts] = useState<TProducts[]>([]);
	const [loading, setLoading] = useState(false);
	console.log(products);
	useEffect(() => {
		if (limit && skip) {
			setLoading(true);

			fetch(
				`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
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
	}, [limit, skip]);

	return (
		<>
			{loading ? (
				<p>Loading..</p>
			) : (
				<div>
					{products.map((product) => (
						<p>{product.title}</p>
					))}
				</div>
			)}
			{/* <ProductsList products={products} /> */}
		</>
	);
}

// type Products = {
// 	products: TProducts[];
// };
// function ProductsList({ products }: Products) {
// 	console.log(products);
// 	return (
// 		<>
// 			<div>{products.map((product) => console.log(product))}</div>
// 		</>
// 	);
// }

// function ProductItem({});
