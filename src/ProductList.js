import React from 'react';
import { useSelector } from 'react-redux';
import CartIcons from './CartIcons';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const products = useSelector((state) => state.products);

	const items = Object.keys(products).map((key) => (
		<div className='col' key={key}>
			<h2>
				<Link to={`/products/${key}`}>{products[key].name}</Link>
			</h2>
			<CartIcons id={key} />
		</div>
	));

	return (
		<div>
			<div className='ProductList'>{items}</div>
		</div>
	);
};
export default ProductList;
