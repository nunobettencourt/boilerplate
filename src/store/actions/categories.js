import { CATEGORIES_FETCH_SUCCESS } from './types';

import { apiAction } from './api';

export const fetchCategories = () => {
	return apiAction({
		entity: 'categories',
		onSuccess: fetchSuccess,
	});
};

const fetchSuccess = data => ({
	type: CATEGORIES_FETCH_SUCCESS,
	data,
});
