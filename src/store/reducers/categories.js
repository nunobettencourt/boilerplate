import {
	CATEGORIES_FETCH_START,
	CATEGORIES_FETCH_SUCCESS,
	CATEGORIES_FETCH_FAILED,
} from '../actions/types';

const INITIAL_STATE = { loading: null, error: null, data: [] };

const categoriesReducer = (state = INITIAL_STATE, { type, data }) => {
	switch (type) {
		case CATEGORIES_FETCH_START:
			return { ...state, loading: true };
		case CATEGORIES_FETCH_SUCCESS:
			return { ...state, loading: false, categories: data };
		case CATEGORIES_FETCH_FAILED:
			return { ...state, loading: false, error: data };
		default:
			return state;
	}
};

export default categoriesReducer;
