import data from './data.json';
const INITIAL_STATE = { products: data.products, cart: {} };

const rootReducer = (state = INITIAL_STATE, action) => {
	const cartCopy = { ...state.cart };
	switch (action.type) {
		case 'ADD_TO_CART':
			cartCopy[action.id] = cartCopy[action.id] || 0 + 1;
			return { ...state, cart: cartCopy };

		case 'REMOVE_FROM_CART':
			if (!cartCopy[action.id]) return state;

		default:
			return state;
	}
};

export default rootReducer;
