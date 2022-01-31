import React from "react"
import { v4 } from 'uuid'
import { Container, Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'



function AddTask({}) {
  const dispatch = useDispatch()

  function displayDate() {
    const today = new Date()
    let month = (today.getMonth() + 1)
    if (month < 10) {
      month = "0" + month
    }
    return today.getFullYear() + '-' + (month) + '-' + today.getDate();
  }

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

  return (
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
          <Form.Control type="date" name="dueDate" defaultValue={displayDate()} required/>
        </Form.Group>
        <Button variant="primary" type="submit">Create task</Button>
      </Form>
  )
}

export default AddTask