import React from 'react';
import { mount, } from 'enzyme';
import { MemoryRouter, } from 'react-router-dom';
import { Provider, } from 'react-redux';
import Login from '.';
import LoginForm from '../components';
import store from '../../store';


describe('<Login />', () => {
  const loginWrapper = mount(
    <MemoryRouter initialEntries={['/login',]}>
      <Provider store={store}>
        <Login />
      </Provider>
    </MemoryRouter>
  );

  it('renders the login form', () => {
    expect(loginWrapper.find(LoginForm)).toHaveLength(1);
  });
});
