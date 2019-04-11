import fetch from 'cross-fetch';
import { NEW_REQUEST } from '../actions/types';
import { apiEnd, apiError, apiStart } from '../actions';

export const api = ({ dispatch }) => next => action => {
	if (action.type !== NEW_REQUEST) return next(action);

	const { entity, params, onSuccess, onFailure } = action.payload;

	const endpoint = `${entity}${params}`;

	dispatch(apiStart());

	fetch(`/products/v2.0/${endpoint}`)
		.then(res => {
			if (res.status >= 400) {
				dispatch(apiError('Bad response from server'));
			}
			return res.json();
		})
		.then(({ data }) => {
			dispatch(onSuccess(data));
		})
		.catch(error => {
			dispatch(apiError(error));
			dispatch(onFailure(error));
		})
		.finally(() => {
			dispatch(apiEnd());
		});
};

export default api;
