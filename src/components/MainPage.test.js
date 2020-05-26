import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
// it('Testing the render of App Component', () => {
//   const mockStore = {
//     robots: [],
//     searchField: '',
//   };
//   expect(shallow(<MainPage store={mockStore} />)).toMatchSnapshot();
// });

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    pending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('Testing the render of MainPage Component without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('It filters the robot correctly', () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
});
