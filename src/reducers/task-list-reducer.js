export default (state = {}, action) => {
  const { name, description, dueDate, created, status, id } = action;
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
          [id] : {
            name: name,
            description: description,
            dueDate: dueDate,
            created: created,
            status: status,
            id: id
          }
      });
      case 'DELETE_TASK':
        let newState = { ...state };
        delete newState[id];
        return newState
    default:
      return state;
  }
};