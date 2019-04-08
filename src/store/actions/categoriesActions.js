import fetch from 'cross-fetch';

import {
	ROOT_URL,
	CATEGORIES_FETCH_START,
	CATEGORIES_FETCH_SUCCESS,
	CATEGORIES_FETCH_FAILED,
} from './types';

export const fetchCategories = () => async dispatch => {
	dispatch(fetchRequest());

	await fetch(`${ROOT_URL}/categories`)
		.then(({ data }) => {
			dispatch(fetchSuccess(data));
		})
		.catch(error => {
			dispatch(fetchError(error));
		});
};

const fetchRequest = () => ({ type: CATEGORIES_FETCH_START });

const fetchSuccess = data => ({
	type: CATEGORIES_FETCH_SUCCESS,
	data,
});
const fetchError = message => ({
	type: CATEGORIES_FETCH_FAILED,
	data: message,
});
