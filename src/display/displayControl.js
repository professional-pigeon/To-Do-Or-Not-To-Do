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

  render() {
    return (
      <Container>
        <Row>
          <Col className="cardHolder toDo">
            <h4>To Do List</h4>
            <ToDo taskList={this.props.taskList} />
          </Col>
          <Col className="cardHolder inProgress">
            <h4>In Progress</h4>
            <InProgress taskList={this.props.taskList} />
          </Col>
          <Col className="cardHolder done">
            <h4>Completed</h4>
            <Done taskList={this.props.taskList} />
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