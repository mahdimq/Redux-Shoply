import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CartIcons from './CartIcons';

const ProductList = () => {
	const { products, cart } = useSelector(
		(state) => ({
			products: state.products,
			cart: state.cart
		}),
		shallowEqual
	);

	const items = Object.keys(products).map((key) => (
		<div className='ui cards'>
			<div className='card'>
				<div className='content'>
					<img className='right floated mini ui image' src={products[key].image_url} />
					<div className='header'>{products[key].name}</div>

					<div className='extra content'>
						<CartIcons />
					</div>
				</div>
			</div>
		</div>
	));

	console.log('PRODUCT LIST ', items);

	return (
		<div>
			<h1>Product List</h1>
			{items}
		</div>
	);
};
export default ProductList;
