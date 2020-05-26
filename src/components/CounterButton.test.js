import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';
// Testing Stateful Component
it('Renders the Counter Button Component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('Correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  //   Simulate click test
  wrapper.find('[id="counter"]').simulate('click');

  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual('red');
});
