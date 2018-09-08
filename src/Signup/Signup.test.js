import React from 'react';
import { shallow, mount } from 'enzyme';
import SignupForm from './components/SignupForm';
import store from '../store';

describe('Signup form', () => {
  const signupFormWrapper = shallow(
    <SignupForm
      store={store}
      onChange={() => ''}
      onClick={() => ''}
      error={{ username: '' }}
      isFetching={true}
    />,
  );

  it('renders input fields and a button ', () => {
    const signupFormWrapper = shallow(
      <SignupForm store={store} onChange={() => ''} onClick={() => ''} />,
    );
    expect(signupFormWrapper.find('Input').length).toEqual(4);
    expect(signupFormWrapper.find('Button').length).toEqual(1);
  });

  it('renders error fields ', () => {
    expect(signupFormWrapper.find('.error').length).toEqual(4);
  });

  it('renders isFetching action correctly', () => {
    const signupButton = signupFormWrapper.find('.blue').getElement();
    expect(signupButton.props.children).toBe('SIGNING UP...');
  });

  it('calls onClick event on click of a board square', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <SignupForm store={store} onChange={() => ''} onClick={onClick} />,
    );
    wrapper.find('.blue').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
