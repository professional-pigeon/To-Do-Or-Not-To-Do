import { combineReducers } from "redux";
import taskListReducer from "./task-list-reducer";
import displayStateReducer from "./display-state-reducer"

const rootReducer = combineReducers({
  displayState: displayStateReducer,
  taskList: taskListReducer
})

export default rootReducer