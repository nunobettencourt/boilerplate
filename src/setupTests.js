import React from 'react';
import { configure } from 'enzyme';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Setting global variables to be used by all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
