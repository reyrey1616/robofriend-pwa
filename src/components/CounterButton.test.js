import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('Renders the Counter Button Component', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});
