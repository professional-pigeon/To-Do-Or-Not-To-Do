import taskListReducer from '../reducers/task-list-reducer'

describe('taskListReducer', () => {

  let action;
  const taskData = {
    name: "Fix that widget",
    description: "Must we always fidget over this widget? Let's not ditch it. Let's fix it and raise our resolution digits.",
    dueDate: "some date in a time format",
    created: "Timestamp",
    id: 1
  }

  const currentState = {
    1:  {
      name: "Fix that widget",
      description: "Must we always fidget over this widget? Let's not ditch it. Let's fix it and raise our resolution digits.",
      dueDate: "some date in a time format",
      created: "Timestamp",
      id: 1
    },
    2: {
      name: "Feed Squirrels",
      description: "I tried to keep them out of the bird feeder. I'm now trying appeasement strategies.",
      dueDate: "some date in a time format",
      created: "Timestamp",
      id: 2
    }
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

  test('Should delete a task from the task list', () => {
    action= {
      type: 'DELETE_TASK',
      id: 1
    };
    expect(taskListReducer(currentState, action)).toEqual({
      2: {
        name: "Feed Squirrels",
        description: "I tried to keep them out of the bird feeder. I'm now trying appeasement strategies.",
        dueDate: "some date in a time format",
        created: "Timestamp",
        id: 2
      }
    })
  })

});