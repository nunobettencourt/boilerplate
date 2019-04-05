import {
	PRODUCTS_FETCH_START,
	PRODUCTS_FETCH_SUCCESS,
	PRODUCTS_FETCH_FAILED,
} from '../actions/types';

const INITIAL_STATE = {};

const productsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PRODUCTS_FETCH_START:
			return action.payload;
		default:
			return state;
	}
};

export default productsReducer;
