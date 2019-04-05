// Component to be tested
import HeaderBar from './HeaderBar';

describe('HeaderBar', () => {
	test('renders without crashing', () => {
		shallow(<HeaderBar />);
	});

	test('has Tester as a title', () => {
		const wrapper = mount(<HeaderBar />);
		expect(wrapper.text()).toEqual('tester');
	});
});
