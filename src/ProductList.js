import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

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
						<button className='ui vertical animated green button' tabindex='0'>
							<div className='hidden content'>Add</div>
							<div className='visible content'>
								<i className='shop icon'></i>
							</div>
						</button>
						<button className='ui vertical red animated button' tabindex='0'>
							<div className='hidden content'>Remove</div>
							<div className='visible content'>
								<i className='trash icon'></i>
							</div>
						</button>
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
