import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIcons from './CartIcons';

const ProductDetails = () => {
	const { id } = useParams();
	const { name, description, image_url, price } = useSelector((state) => ({
		...state.products[id]
	}));

	return (
		<div className='row'>
			<div className='col'>
				<img src={image_url} alt='product' />
				<p>{name}</p>
				<p>{description}</p>
				<p>$ {price}</p>
				<CartIcons id={id} />
				<Link exact to='/'>
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default ProductDetails;
