import React from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useState } from "react"

function TaskCard(props) {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)

  console.log(props)


  function deleteTask(event) {
    let action = {
      type: "DELETE_TASK",
      id: taskId
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
    setEdit(false)
  }

  if (edit) {
    return (
      <Form>
        <Card style={{ width: '18rem', margin: 'auto' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Description: {props.description}</Card.Text>
            <Card.Text>dueDate: {props.dueDate}</Card.Text>
            <Button onClick={() => deleteTask(props.id)}>Delete</Button>
            <Button onClick={() => setEdit(true)}>edit</Button>
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