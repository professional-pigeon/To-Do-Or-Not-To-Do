import React from "react"
import { Container, Card } from "react-bootstrap"


function TaskCard({ name, description, dueDate, id }) {

  return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>dueDate: {dueDate}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default TaskCard