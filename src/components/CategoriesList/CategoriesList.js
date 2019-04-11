import React from 'react';
import PropTypes from 'prop-types';

import './CategoriesList.styles.css';

const CategoriesList = ({ categories }) => {
	return (
		<ul className="categoriesList">
			{categories
				.filter(category => category.hidden === false)
				.map(category => (
					<li key={category.id}>{category.title}</li>
				))}
		</ul>
	);
};

CategoriesList.propTypes = {
	categories: PropTypes.array.isRequired,
};
export default CategoriesList;
