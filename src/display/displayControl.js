import { render } from '@testing-library/react'
import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import ToDo from './list/ToDo'
import InProgress from './list/InProgress'
import Done from './list/Done'

class DisplayControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ToDo taskList={this.props.taskList} />
          </Col>
          <Col>
            <InProgress taskList={this.props.taskList} />
          </Col>
          <Col>
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