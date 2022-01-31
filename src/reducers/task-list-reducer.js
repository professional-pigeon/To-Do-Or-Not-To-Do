export default (state = {}, action) => {
  const { name, description, dueDate, created, id } = action;
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
          [id] : {
            name: name,
            description: description,
            dueDate: dueDate,
            created: created,
            id: id
          }
      });
      case 'DELETE_TASK':
        let newState = { ...state };
        delete newState[id];
        return newState
      case 'EDIT_TASK':
        let newState = { ...state };
        return newState
    default:
      return state;
  }
};