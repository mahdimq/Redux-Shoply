import React from 'react';
import { useDispatch } from 'react-redux';

const CartIcons = () => {
	const dispatch = useDispatch();

	const addToCart = (id) => dispatch({ type: 'ADD_TO_CART', id });
	const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', id });

	return (
		<div>
			<button onClick={addToCart} className='ui vertical animated green button' tabindex='0'>
				<div className='hidden content'>Add</div>
				<div className='visible content'>
					<i className='shop icon'></i>
				</div>
			</button>
			<button onClick={removeFromCart} className='ui vertical red animated button' tabindex='0'>
				<div className='hidden content'>Remove</div>
				<div className='visible content'>
					<i className='trash icon'></i>
				</div>
			</button>
		</div>
	);
};

export default CartIcons;
