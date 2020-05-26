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
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('Testing the render of MainPage Component without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('It filters the robot correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'john',
    isPending: false,
  };

  let wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com',
    },
  ]);
});

it('It filters the robot correctly2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'a',
    isPending: false,
  };

  const filteredRobots = [];
  let wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
