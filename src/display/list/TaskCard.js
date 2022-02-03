import React from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'



function TaskCard({ name, description, dueDate, id }) {
  const dispatch = useDispatch()

  function deleteTask(taskId) {
    let action = {
      type: "DELETE_TASK",
      id: taskId
    }
    dispatch(action)
  }

  return (
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>dueDate: {dueDate}</Card.Text>
          <Button onClick={() => deleteTask(id)}>Delete</Button>
        </Card.Body>
      </Card>
  )
}

export default TaskCard