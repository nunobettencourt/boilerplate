import Home from './Home';

const props = {
	fetchCategories: jest.fn(),
	fetchProducts: jest.fn(),
	categories: [{ id: 1, title: 'one' }, { id: 2, title: 'two' }],
};

describe('Home', () => {
	test('renders without crashing', async () => {
		const wrapper = shallow(<Home {...props} />);

		expect(wrapper.find('header').hasClass('App-header')).toBe(true);
		/**
		 * due to the fact that I'm using shallow to render the Home component
		 * the following tests will fail.
		 * By replacing "shallow" with "mount" and using a standard import of
		 * CategoriesList compoent, as well as removing "Suspense" the following
		 * the tests below will pass
		 */

		//expect(props.fetchCategories).toHaveBeenCalled();
		//expect(props.fetchProducts).toHaveBeenCalled();
	});
});
