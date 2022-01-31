import React from "react"
import { v4 } from 'uuid'
import { Container, Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'



function ListControl({ taskList }) {
  const dispatch = useDispatch()

  function addTask(event) {
    event.preventDefault()
    let action = {
      type: 'ADD_TASK',
      name: event.target.name.value,
      description: event.target.description.value,
      dueDate: event.target.dueDate.value,
      created: Date().toLocaleString(),
      id: v4(),
      }
      console.log(action)
      dispatch(action)
  }
  

  console.log(taskList)

  return (
    <Container>
      <Form onSubmit={addTask}>
        <Form.Group controlId="taskName">
          <Form.Label>Name of task:</Form.Label>
          <Form.Control type="text" name="name" defaultValue="Make Widget" required/>
        </Form.Group>
        <Form.Group controlId="taskDescription">
          <Form.Label>Description of Task:</Form.Label>
          <Form.Control type="text" name="description" defaultValue="Let's finally tackle this widget!" required/>
        </Form.Group>
        <Form.Group controlId="tasDate">
          <Form.Label>Name of task:</Form.Label>
          <Form.Control type="date" name="dueDate" required/>
        </Form.Group>
        <Button variant="primary" type="submit">Create task</Button>
      </Form>
    </Container>
  )
}

export default ListControl