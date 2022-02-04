import React from "react"
import { Card, Button, Form } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useState } from "react"
import { ItemTypes } from '../../constants'
import { useDrag } from 'react-dnd'

function TaskCard(props) {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { props },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      item: { props } 
    }),
  }))

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
      status: props.status,
      created: props.created,
      id: props.id,
    }
    dispatch(action)
    setEdit(false)
  }

  function changeStatus() {
    let newStatus = props.status + 1
    let action = {
      type: 'ADD_TASK',
      name: props.name,
      description: props.description,
      dueDate: props.dueDate,
      status: newStatus,
      created: props.created,
      id: props.id,
    }
    dispatch(action)
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
            <Button onClick={() => deleteTask(props.id)}>Delete</Button>
          </Card.Body>
        </Card>
      </Form>
    )
  } else {
    return (
      <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
        <Card style={{ width: '18rem', margin: 'auto' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Description: {props.description}</Card.Text>
            <Card.Text>dueDate: {props.dueDate}</Card.Text>
            <Button onClick={() => setEdit(true)}>edit</Button>
            <Button onClick={() => changeStatus()}>Change status</Button>
          </Card.Body>
        </Card>
    </div>
    )
  }
}

export default TaskCard