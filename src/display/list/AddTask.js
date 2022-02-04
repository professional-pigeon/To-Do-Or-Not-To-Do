import React from "react"
import { v4 } from 'uuid'
import { Form, Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useState } from "react"

function AddTask() {
  const dispatch = useDispatch()
  const [showAdd, setShowAdd] = useState(false)

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
      status: 0,
      created: Date().toLocaleString(),
      id: v4(),
      }
      dispatch(action)
      setShowAdd(false)
  }

  if (showAdd) {
  return (
    <Form onSubmit={addTask}>
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Body>
        <Card.Title>Add Card</Card.Title>
          <Form.Group controlId="taskName">
            <Form.Label><Card.Text>Name:</Card.Text></Form.Label>
            <Form.Control type="text" name="name" required/>
          </Form.Group>
          <Form.Group controlId="taskDescription">
            <Form.Label>Description of Task:</Form.Label>
            <Form.Control type="text" name="description" required/>
          </Form.Group>
          <Form.Group controlId="taskDate">
            <Form.Label>Date Due</Form.Label>
            <Form.Control type="date" name="dueDate" required/>
          </Form.Group>
        <Button variant="primary" type="submit">Create new Task</Button>
      </Card.Body>
    </Card>
  </Form>
  )
  } else {
    return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Body>
        <Card.Title>Add Card</Card.Title>
        <Button onClick={() => setShowAdd(true)}>Add A Task</Button>
      </Card.Body>
    </Card>
    )
  }
}

export default AddTask