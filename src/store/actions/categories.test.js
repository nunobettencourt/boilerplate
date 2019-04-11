import * as actions from './index';
import { CATEGORIES_FETCH_SUCCESS } from './types';

const mockStore = configureStore();
const store = mockStore();

describe('Categories actions', () => {
	beforeEach(() => {
		store.clearActions();
	});

	test('dispatches the correct action and payload', () => {
		const mockData = [{ id: 1, tile: 'test' }, { id: 2, tile: 'test' }];
		const expectedActions = [
			{
				type: CATEGORIES_FETCH_SUCCESS,
				data: [{ id: 1, tile: 'test' }, { id: 2, tile: 'test' }],
			},
		];

		store.dispatch(actions.fetchSuccess(mockData));
		expect(store.getActions()).toEqual(expectedActions);
	});
});
