import React from "react"
import { Container, Card } from "react-bootstrap"
import TaskCard from './TaskCard'

function ToDo({ taskList }) {
  return (
    taskList && Object.keys(taskList).length === 0 
      ? <TaskCard name={"No Task"} description={"No Description"} dueDate={"No Date"} id={0} />
      : Object.values(taskList).map((value, key) => (
        <TaskCard key={key} created={value.created} name={value.name} description={value.description} status={value.status} dueDate={value.dueDate} id={value.id} />
      ))
  )
}

export default ToDo