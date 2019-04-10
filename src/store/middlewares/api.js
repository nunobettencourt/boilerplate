import axios from 'axios';
import { NEW_REQUEST, ROOT_URL } from '../actions/types';
import { apiEnd, apiError, apiStart } from '../actions';

export const api = ({ dispatch }) => next => action => {
	if (action.type !== NEW_REQUEST) return next(action);

	const { entity, params, onSuccess, onFailure } = action.payload;

	const url = `${ROOT_URL}/${entity}${params}`;

	dispatch(apiStart());

	axios
		.get(url)
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
