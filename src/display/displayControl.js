import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ToDo from './list/ToDo'
import InProgress from './list/InProgress';
import Done from './list/Done';
import AddTask from './list/AddTask';
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
    this.taskSplit(taskList, toDo, inProgress, done)
    console.log(toDo)
    return (
      <Container>
        <Row>
          <Col className="cardHolder toDo">
            <h4>To Do List</h4>
            <AddTask />
            { Object.keys(toDo).length > 0 ? <ToDo taskList={toDo} /> : null }
          </Col>
          <Col className="cardHolder inProgress">
            <h4>In Progress</h4>
            { Object.keys(inProgress).length > 0 ? <InProgress taskList={inProgress} /> : null }
          </Col>
          <Col className="cardHolder done">
            <h4>Completed</h4>
            { Object.keys(done).length > 0 ? <Done taskList={done} /> : null }
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