import { render } from '@testing-library/react'
import React from 'react'
import HeaderControl from './header/headerControl'
import ListControl from './list/listControl'
import SidebarControl from './sidebar/sidebarControl'
import { connect } from 'react-redux'

class DisplayControl extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderControl />
        <ListControl taskList={this.props.taskList} />
        <SidebarControl />
      </React.Fragment>
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