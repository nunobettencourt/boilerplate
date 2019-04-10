import {
	NEW_REQUEST,
	REQUEST_START,
	REQUEST_END,
	REQUEST_ERROR,
} from '../actions/types';

export const apiStart = () => ({ type: REQUEST_START });

export const apiEnd = () => ({ type: REQUEST_END });

export const apiError = error => ({ type: REQUEST_ERROR, error });

export const apiAction = ({
	entity = '',
	params = '',
	onSuccess = () => {},
	onFailure = () => {},
}) => {
	return {
		type: NEW_REQUEST,
		payload: {
			entity,
			params,
			onSuccess,
			onFailure,
		},
	};
};
