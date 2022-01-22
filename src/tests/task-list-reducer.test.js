import taskListReducer from '../reducers/task-list-reducer'

describe('taskListReducer', () => {

  let action;
  const taskData = {
    name: "Fix that widget",
    description: "Must we always fidget over this widget? Let's not ditch it. Let's fix it and raise our resolution digits.",
    dueDate: "some date in a time format",
    created: "Timestamp",
    id: "generate Random"
  }
  test('Should return default state if there is no action type passed into the reducer', 
    ()=> {
      expect(taskListReducer({}, { type: null })).toEqual({});
  });

  test('Should add a task to the mainTaskList', () => {
    const { name, description, dueDate, created, id } = taskData;
    action = {
      type: 'ADD_TASK',
      name: name,
      description: description,
      dueDate: dueDate,
      created: created,
      id: id
    };

    expect(taskListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        dueDate: dueDate,
        created: created,
        id: id
      }
    });
  });
});