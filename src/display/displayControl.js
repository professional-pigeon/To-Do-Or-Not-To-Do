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

  taskSplit(taskList, toDo, inProgress, done) {
    Object.values(taskList).map(value => {
      if (value.status === 0) {
        toDo[value.id] = { ...value }
      } else if (value.status === 1) {
        inProgress[value.id] = { ...value }
      } else {
        done[value.id] = { ...value }
      }
    })
    return toDo, inProgress, done
  }

  render() {
    const taskList = this.props.taskList
    let toDo = {}
    let inProgress = {}
    let done = {}
    this.combineReturn(taskList, toDo, inProgress, done)
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