import React, { useState, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const CategoriesList = lazy(() => import('../CategoriesList/CategoriesList'));

const Home = ({ fetchCategories, fetchProducts, categories }) => {
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		const fetchInitialData = () => {
			fetchCategories();
			fetchProducts();

			setInitialized(true);
		};
		!initialized && fetchInitialData();
	});

	return (
		<header className="App-header">
			<Suspense fallback={<div>Loading...</div>}>
				<CategoriesList categories={categories} />
			</Suspense>
		</header>
	);
};

Home.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	fetchProducts: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
};

export default Home;
