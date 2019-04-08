import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';

const Home = ({ fetchCategories }) => {
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		!initialized && fetchCategories();
		setInitialized(true);
	});

	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	);
};

export default Home;
