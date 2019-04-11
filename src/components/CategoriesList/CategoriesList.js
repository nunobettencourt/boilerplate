import React from 'react';
import PropTypes from 'prop-types';

const CategoriesList = ({ categories }) => {
	return (
		<ul className="categoriesList">
			{categories.map(category => (
				<li key={category.id}>{category.title}</li>
			))}
		</ul>
	);
};

CategoriesList.propTypes = {
	categories: PropTypes.array.isRequired,
};
export default CategoriesList;
