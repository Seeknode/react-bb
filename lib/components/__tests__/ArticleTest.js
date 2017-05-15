import React from 'react';
import Article from '../Article';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Article
      
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});