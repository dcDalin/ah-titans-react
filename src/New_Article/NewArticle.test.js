import React from 'react';
import { shallow, } from 'enzyme';

import NewArticle from './components/NewArticle';

describe('Creation of new article', () => {
  it('should render the create article component', () => {
    shallow(<NewArticle />);
  });
  it('renders necessary input fields', () => {
    const NewArticleWrapper = shallow(<NewArticle />);
    expect(NewArticleWrapper.find('Input').length).toEqual(3);
  });
  it('renders buttons', () => {
    expect(shallow(<NewArticle />).find('Button').length).toEqual(2);
  });
});
