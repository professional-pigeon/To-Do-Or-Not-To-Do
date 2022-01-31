import React from "react"
import { v4 } from 'uuid'
import { Container, Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import AddTask from './addTask'



function ListControl({ taskList }) {

  return (
    <Container>
      <AddTask />
    </Container>
  )
}

export default ListControl