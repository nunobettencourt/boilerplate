import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = composeWithDevTools(
	applyMiddleware(...middleware),
	...enhancers
);

const store = createStore(
	rootReducer(history),
	initialState,
	composedEnhancers
);

export default store;
