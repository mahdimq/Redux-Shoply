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
		<div className='ui three column grid'>
			<div className='column'>
				<div className='ui fluid card'>
					<div className='image'>
						<img src={image_url} alt='product' />
					</div>
					<div className='content'>
						<p className='header'>{name}</p>
					</div>
					<div className='description'>
						<p className='header'>{description}</p>
					</div>
					<div className='extra content'>
						<span className='right floated'>{price}</span>
						<CartIcons id={id} />
						<Link exact to='/'>
							Go Back
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
