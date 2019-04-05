import axios from 'axios';

import {
	ROOT_URL,
	CATEGORIES_FETCH_START,
	CATEGORIES_FETCH_SUCCESS,
	CATEGORIES_FETCH_FAILED,
} from './types';

export const fetchHierarchy = () => async dispatch => {
	dispatch(fetchRequest());

	var authOptions = {
		method: 'get',
		url: `${ROOT_URL}/categories`,
	};
	await axios(authOptions)
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
