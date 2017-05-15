import React from 'react';
import Article from '../Article';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const testProps = {
    article: {},
    actions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };
  const tree = renderer.create(
    <Article
      {...testProps}
    />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});