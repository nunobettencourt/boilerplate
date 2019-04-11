import Home from './Home';
import CategoriesList from '../CategoriesList/CategoriesList';

const props = {
	fetchCategories: jest.fn(),
	fetchProducts: jest.fn(),
	categories: [{ id: 1, title: 'one' }, { id: 2, title: 'two' }],
};

describe('Home', () => {
	test('renders without crashing', () => {
		const wrapper = mount(<Home {...props} />);
		expect(wrapper.find('header').hasClass('App-header')).toBe(true);
		expect(props.fetchCategories).toHaveBeenCalled();
		expect(props.fetchProducts).toHaveBeenCalled();
	});
});
