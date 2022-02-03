import React from "react"
import { Container, Card } from "react-bootstrap"
import TaskCard from './TaskCard'


function InProgress({ taskList }) {
  return (
      taskList && Object.keys(taskList).length === 0 
        ? <TaskCard name={"No Task"} description={"No Description"} dueDate={"No Date"} id={0} />
        : Object.values(taskList).map((value, key) => (
          <TaskCard created={value.created} name={value.name} description={value.description} dueDate={value.dueDate} id={value.id} />
          ))
  )
}

export default InProgress