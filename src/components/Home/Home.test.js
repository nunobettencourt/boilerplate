import Home from './Home';

describe('Home', () => {
	test('renders without crashing', () => {
		shallow(<Home />);
	});
});
