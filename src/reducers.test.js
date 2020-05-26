import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import * as reducers from './reducers';

describe('Search robots', () => {
  const initialStateSearch = {
    searchField: '',
  };
  it('Return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle the CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: 'abc',
      })
    ).toEqual({ searchField: 'abc' });
  });
});

describe('REQUEST ROBOTS', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };

  it('Return the robot initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle the REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ robots: [], isPending: true });
  });

  it('should handle the REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'John',
          email: 'john@gmail.com',
        },
      ],
      isPending: false,
    });
  });

  it('should handle the REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'noooo!',
      })
    ).toEqual({
      error: 'noooo!',
      robots: [],
      isPending: false,
    });
  });
});
