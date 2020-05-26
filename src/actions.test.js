import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

// Mocking store for async action testing
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
const mockStore = configureMockStore([thunkMiddleware]);

it('SEARCH FIELD ACTIONS: should create action to search robot', () => {
  const text = 'Nice';
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  console.log('Success', action);
  expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
  //   expect(action[1]).toEqual({ type: REQUEST_ROBOTS_SUCCESS });
  //   expect(action[2]).toEqual({ type: REQUEST_ROBOTS_FAILED });
});
