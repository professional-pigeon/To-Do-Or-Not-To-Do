import { render } from '@testing-library/react'
import React from 'react'
import HeaderControl from './header/HeaderControl'
import ListControl from './list/ListControl'
import SidebarControl from './sidebar/SidebarControl'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

class DisplayControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <HeaderControl />
        <Row>
          <Col xs={4}>
            <SidebarControl />
          </Col>
          <Col xs={6}>
            <ListControl taskList={this.props.taskList} />
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