import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<ProductList />
			</Route>
			<Route path='/products/:id'>
				<ProductDetails />
			</Route>
			<Route path='/cart'>
				<Cart />
			</Route>
			<Redirect exact to='/'>
				<ProductList />
			</Redirect>
		</Switch>
	);
}

export default Routes;
