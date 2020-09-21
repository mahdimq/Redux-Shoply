import data from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { cartTotal } from './helper';

const INITIAL_STATE = { products: data.products, cart: {}, cartTotal: 0 };

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const cartCopy = { ...state.cart };
			cartCopy[action.id] = cartCopy[action.id] || 0 + 1;
			return { ...state, cart: cartCopy, cartTotal: (state.products, cartCopy) };
		}

		case REMOVE_FROM_CART: {
			const cartCopy = { ...state.cart };
			if (!cartCopy[action.id]) {
				return state;
			}
			cartCopy[action.id]--;
			if (!cartCopy[action.id]) {
				delete cartCopy[action.id];
			}
			return { ...state, cart: cartCopy, cartTotal: cartTotal(state.products, cartCopy) };
		}

		default:
			return state;
	}
};

export default rootReducer;
