import React from "react"
import { Card, Button, Form } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useState } from "react"

function TaskCard(props) {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)

  console.log(props)


  function deleteTask(taskID) {
    let action = {
      type: "DELETE_TASK",
      id: taskID
    }
    dispatch(action)
  }

  function editTask(event) {
    let action = {
      type: 'ADD_TASK',
      name: event.target.name.value,
      description: event.target.description.value,
      dueDate: event.target.dueDate.value,
      created: props.created,
      id: props.id,
    }
    console.log("lets see it", action)
    dispatch(action)
    setEdit(false)
  }

  if (edit) {
    return (
      <Form onSubmit={editTask}>
        <Card style={{ width: '18rem', margin: 'auto' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
              <Form.Group controlId="taskName">
                <Form.Label><Card.Text>New Name:</Card.Text></Form.Label>
                <Form.Control type="text" name="name" defaultValue={props.name} required/>
              </Form.Group>
              <Form.Group controlId="taskDescription">
                <Form.Label>Description of Task:</Form.Label>
                <Form.Control type="text" name="description" defaultValue={props.description} required/>
              </Form.Group>
              <Form.Group controlId="taskDate">
                <Form.Label>Name of task:</Form.Label>
                <Form.Control type="date" name="dueDate" defaultValue={props.dueDate} required/>
              </Form.Group>
            <Button variant="primary" type="submit">Edit task</Button>
          </Card.Body>
        </Card>
      </Form>
    )
  } else {
    return (
        <Card style={{ width: '18rem', margin: 'auto' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Description: {props.description}</Card.Text>
            <Card.Text>dueDate: {props.dueDate}</Card.Text>
            <Button onClick={() => deleteTask(props.id)}>Delete</Button>
            <Button onClick={() => setEdit(true)}>edit</Button>
          </Card.Body>
        </Card>
    )
  }
}

export default TaskCard