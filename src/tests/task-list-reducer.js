import taskListReducer from '../../reducers/task-list-reducer'

describe('taskListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', 
    ()=> {
      expect(taskListReducer({}, { type: null })).toEqual({});
  })
})