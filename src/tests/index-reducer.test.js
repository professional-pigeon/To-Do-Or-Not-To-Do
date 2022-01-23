import rootReducer from '../reducers/index';
import { createStore } from 'redux';
import taskListReducer from '../reducers/task-list-reducer'
import displayStateReducer from "../reducers/display-state-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      displayState: "default",
      taskList: {}
    });
  });

  test('Check that initial state of taskListReducer matches root reducer', () => {
    expect(store.getState().taskList).toEqual(taskListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of displayState matches root reducer', () => {
    expect(store.getState().displayState).toEqual(displayStateReducer(undefined, { type: null }));
  });

});