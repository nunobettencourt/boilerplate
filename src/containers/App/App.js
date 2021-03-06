import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../store/store';
import './App.css';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import HomeContainer from '../../containers/Home/HomeContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<HeaderBar />
					<ConnectedRouter history={history}>
						<Switch>
							<Route exact path="/" component={HomeContainer} />
							<Route path="/categories" />
							<Route path="/products" />
						</Switch>
					</ConnectedRouter>
				</Provider>
			</div>
		);
	}
}

export default App;
