import React from "react"
import taskListReducer from "../../reducers/task-list-reducer"
import { Container, Form } from "react-bootstrap"
import { useDispatch } from 'react-redux'



function ListControl({ taskList }) {
  const dispatch = useDispatch()

  function addTask() {
    let action = {
      type: 'ADD_TASK',
      name: "this is 8",
      description: "test description",
      dueDate: "test date",
      created: "teset date again",
      id: 8
      }
      dispatch(action)
  }

  console.log(taskList[9])

  return (
    <Container>
      {taskList[8] ? <p>{taskList[8].name}</p> : <p>nada</p>}
      <button onClick={() => addTask()}>Click add</button>
    </Container>
  )
}

export default ListControl