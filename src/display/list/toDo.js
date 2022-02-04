import React from "react"
import { Container, Card } from "react-bootstrap"
import TaskCard from './TaskCard'
import { ItemTypes } from '../../constants'
import { useDrop } from 'react-dnd'


function ToDo({ taskList }) {

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop: () => console.log('dropped')
    }),
    // future arg
  )

  return (
    Object.values(taskList).map((value, key) => (
      <TaskCard key={key} created={value.created} name={value.name} description={value.description} status={value.status} dueDate={value.dueDate} id={value.id} />
    ))
  )
}

export default ToDo