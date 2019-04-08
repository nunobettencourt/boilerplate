import { connect } from 'react-redux';

import Home from '../../components/Home/Home';

import { fetchCategories } from '../../store/actions/categoriesActions';

const mapStateToProps = ({ categories }) => categories;

export const HomeContainer = connect(
	mapStateToProps,
	{ fetchCategories }
)(Home);

export default HomeContainer;
