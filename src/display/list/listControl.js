import React from "react"
import { Container, Form, Button } from "react-bootstrap"
import AddTask from './AddTask'
import InProgress from './InProgress'



function ListControl({ taskList }) {

  return (
    <Container>
      <AddTask />
      <InProgress taskList={taskList} />
    </Container>
  )
}

export default ListControl