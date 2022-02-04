import React from "react"
import { Container, Col } from "react-bootstrap"
import TaskCard from './TaskCard'
import { ItemTypes } from '../../constants'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import './List.css'



function InProgress({ taskList }) {
  const dispatch = useDispatch()

  function changeStatus(item, x) {
    let action = {
      type: 'ADD_TASK',
      name: item.props.name,
      description: item.props.description,
      dueDate: item.props.dueDate,
      status: x,
      created: item.props.created,
      id: item.props.id,
    }
    dispatch(action)
  }

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop: (item) => changeStatus(item, 1),
    }),
  )

  return (
    <Col className="cardHolder inProgress" ref={drop}>
      <h4>In Progress</h4>
      {Object.values(taskList).map((value, key) => (
        <TaskCard key={key} created={value.created} name={value.name} description={value.description} status={value.status} dueDate={value.dueDate} id={value.id} />
      ))}
    </Col>
  )
}

export default InProgress