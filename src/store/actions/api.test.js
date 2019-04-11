import configureStore from 'redux-mock-store';

import * as actions from './index';
import {
	NEW_REQUEST,
	REQUEST_START,
	REQUEST_END,
	REQUEST_ERROR,
} from './types';

const mockStore = configureStore();
const store = mockStore();

describe('api actions', () => {
	beforeEach(() => {
		store.clearActions();
	});

	test('dispatches apiStart correctly', () => {
		const expectedActions = [
			{
				type: REQUEST_START,
			},
		];

		store.dispatch(actions.apiStart());
		expect(store.getActions()).toEqual(expectedActions);
	});

	test('dispatches apiEnd correctly', () => {
		const expectedActions = [
			{
				type: REQUEST_END,
			},
		];

		store.dispatch(actions.apiEnd());
		expect(store.getActions()).toEqual(expectedActions);
	});

	test('dispatches apiError correctly', () => {
		const expectedActions = [
			{
				type: REQUEST_ERROR,
				error: 'Api Error',
			},
		];

		store.dispatch(actions.apiError('Api Error'));
		expect(store.getActions()).toEqual(expectedActions);
	});

	test('dispatches apiAction correctly', () => {
		const onSuccess = jest.fn();
		const onFailure = jest.fn();

		const expectedActions = [
			{
				type: NEW_REQUEST,
				payload: {
					entity: 'entity',
					params: 'params',
					onSuccess,
					onFailure,
				},
			},
		];

		store.dispatch(
			actions.apiAction({
				entity: 'entity',
				params: 'params',
				onSuccess,
				onFailure,
			})
		);
		expect(store.getActions()).toEqual(expectedActions);
	});
});
