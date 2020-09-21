import React from 'react';
import { useSelector } from 'react-redux';
import CartIcons from './CartIcons';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { products, cart, cartTotal } = useSelector((state) => state);
	const items = Object.keys(cart).map((id) => (
		<tr key={id}>
			<td className='text-center align-middle'>
				<Link to={`/products/${id}`}>{products[id].name}</Link>
			</td>
			<td className='text-center align-middle'>${products[id].price}</td>
			<td className='text-center align-middle'>{cart[id]}</td>
			<td>
				<CartIcons id={id} />
			</td>
		</tr>
	));
	return items.length === 0 ? (
		<h2>Cart Empty!</h2>
	) : (
		<div className='Cart'>
			<h2 className='m-3'>Your Cart</h2>
			<table className='Cart-table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Add/Remove</th>
					</tr>
				</thead>
				<tbody>{items}</tbody>
			</table>
			<p className='my-3'>Total: ${cartTotal}</p>
		</div>
	);
};

export default Cart;
