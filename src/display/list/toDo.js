import React from "react"
import { Container, Card } from "react-bootstrap"
import TaskCard from './TaskCard'


function ToDo({ taskList }) {

  return (
    Object.values(taskList).map((value, key) => (
      <TaskCard key={key} created={value.created} name={value.name} description={value.description} status={value.status} dueDate={value.dueDate} id={value.id} />
    )))
}

export default ToDo