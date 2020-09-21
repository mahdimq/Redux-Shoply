import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

const CartIcons = ({ id }) => {
	const dispatch = useDispatch();
	const addItem = () => dispatch(addToCart(id));
	const removeItem = () => dispatch(removeFromCart(id));

	return (
		<div className='d-flex justify-content-between'>
			<button onClick={addItem}>Add</button>
			<button onClick={removeItem}>Remove</button>
		</div>
	);
};

export default CartIcons;
