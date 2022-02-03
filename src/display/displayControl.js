import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ToDo from './list/ToDo'
import InProgress from './list/InProgress';
import Done from './list/Done';
import './cardHolder.css';


class DisplayControl extends React.Component {

  constructor(props) {
    super(props);
  }

  createToDo(taskList) {
    let toDo = {}
    Object.values(taskList).map((value, key) => (
      value.status === 0 ? toDo[value.id] = { ...value } : null
    ))
    return toDo
  }

  createInProgress(taskList) {
    let toDo = {}
    Object.values(taskList).map((value, key) => (
      value.status === 1 ? toDo[value.id] = { ...value } : null
    ))
    return toDo
  }

  createDone(taskList) {
    let toDo = {}
    Object.values(taskList).map((value, key) => (
      value.status === 2 ? toDo[value.id] = { ...value } : null
    ))
    return toDo
  }

  render() {
    const taskList = this.props.taskList
    console.log(taskList)
    const toDo = this.createToDo(taskList)
    const inProgress =this.createInProgress(taskList)
    const done = this.createDone(taskList)
    return (
      <Container>
        <Row>
          <Col className="cardHolder toDo">
            <h4>To Do List</h4>
            <ToDo taskList={toDo} />
          </Col>
          <Col className="cardHolder inProgress">
            <h4>In Progress</h4>
            <InProgress taskList={inProgress} />
          </Col>
          <Col className="cardHolder done">
            <h4>Completed</h4>
            <Done taskList={done} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayState: state.displayState,
    taskList: state.taskList
  }
}

DisplayControl = connect(mapStateToProps)(DisplayControl)

export default DisplayControl

// look into carddeck for cards