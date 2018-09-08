import React from 'react';
import { shallow } from 'enzyme';
import Home from './components';
import store from '../store';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home store={store} />);
  });
});
