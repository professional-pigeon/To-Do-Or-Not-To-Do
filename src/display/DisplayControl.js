import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ToDo from './list/ToDo'
import InProgress from './list/InProgress';
import Done from './list/Done';

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
    return (
      <Container style={{ boxStyle: 'border-box', height: '85%'}}>
        <Row className="h-100">
            <ToDo taskList={toDo} />
            <InProgress taskList={inProgress} />
            <Done taskList={done} />
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
