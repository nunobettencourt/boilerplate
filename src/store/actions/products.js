import { SET_PRODUCTS } from './types';

import { apiAction } from './api';

export const fetchProducts = () => {
	return apiAction({
		entity: 'products',
		params: '?includes[]=categories&image_sizes[]=365',
		onSuccess: setProducts,
	});
};

const setProducts = data => ({
	type: SET_PRODUCTS,
	data,
});
