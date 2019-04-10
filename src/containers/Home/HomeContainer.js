import { connect } from 'react-redux';

import Home from '../../components/Home/Home';

import { fetchCategories, fetchProducts } from '../../store/actions';

const mapStateToProps = ({ categories }) => categories;

export const HomeContainer = connect(
	mapStateToProps,
	{ fetchCategories, fetchProducts }
)(Home);

export default HomeContainer;
