import React from "react"
import { Container, Card } from "react-bootstrap"
import TaskCard from './TaskCard'


function InProgress({ taskList }) {

  console.log(taskList)
  
  function createCards(taskList) {
    for (const [key, value] of Object.entries(taskList)) {
      <TaskCard name={value.name} description={value.description} dueDate={value.dueDate} id={value.id} />
    }
  }
  return (
    <Container>
      {Object.keys(taskList).map((id, key) => (
                <TaskCard name={taskList[id].name} description={taskList[id].description} dueDate={taskList[id].dueDate} id={id} />

          ))}
    </Container>
  )
}

export default InProgress