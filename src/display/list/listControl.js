import React from "react"
import { Container } from "react-bootstrap"
import ToDo from './ToDo'



function ListControl({ taskList }) {

  return (
    <ToDo taskList={taskList} />
  )
}

export default ListControl