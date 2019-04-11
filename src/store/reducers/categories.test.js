import categoriesReducer from './categories';

import {
	CATEGORIES_FETCH_START,
	CATEGORIES_FETCH_SUCCESS,
	CATEGORIES_FETCH_FAILED,
} from '../actions/types';

describe('Categories reducer', () => {
	describe('INITIAL_STATE', () => {
		test('is correct', () => {
			const action = { type: 'DUMMY_ACTION' };
			const INITIAL_STATE = { loading: null, error: null, data: [] };

			expect(categoriesReducer(undefined, action)).toEqual(INITIAL_STATE);
		});
	});

	describe('CATEGORIES_FETCH_START', () => {
		test('returns the correct state', () => {
			const action = { type: CATEGORIES_FETCH_START };
			const expectedState = { loading: true, error: null, data: [] };

			expect(categoriesReducer(undefined, action)).toEqual(expectedState);
		});
	});

	describe('CATEGORIES_FETCH_SUCCESS', () => {
		const mockData = [{ id: 1, tile: 'test' }, { id: 2, tile: 'test' }];
		test('returns the correct state', () => {
			const action = { type: CATEGORIES_FETCH_SUCCESS, data: mockData };
			const expectedState = {
				loading: false,
				error: null,
				data: [{ id: 1, tile: 'test' }, { id: 2, tile: 'test' }],
			};

			expect(categoriesReducer(undefined, action)).toEqual(expectedState);
		});
	});

	describe('CATEGORIES_FETCH_FAILED', () => {
		test('returns the correct state', () => {
			const action = { type: CATEGORIES_FETCH_FAILED, data: 'error' };
			const expectedState = { loading: false, error: 'error', data: [] };

			expect(categoriesReducer(undefined, action)).toEqual(expectedState);
		});
	});
});
