import React from 'react';
import { useSelector } from 'react-redux';
import CartIcons from './CartIcons';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const products = useSelector((state) => state.products);

	const items = Object.keys(products).map((key) => (
		<div key={key} className='ui cards'>
			<div className='card'>
				<div className='content'>
					<img className='right floated mini ui image' src={products[key].image_url} />
					<Link className='header' exact to={`/products/${key}`}>
						{products[key].name}
					</Link>

					<div className='extra content'>
						<CartIcons id={key} />
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div>
			<h1>Product List</h1>
			{items}
		</div>
	);
};
export default ProductList;
