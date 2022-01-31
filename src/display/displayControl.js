import { render } from '@testing-library/react'
import React from 'react'
import HeaderControl from './header/HeaderControl'
import ListControl from './list/ListControl'
import SidebarControl from './sidebar/SidebarControl'
import { connect } from 'react-redux'

class DisplayControl extends React.Component {

  constructor(props) {
    super(props);
  }

  // addTask = () => {
  //   const { dispatch } = this.props
  //   let action = {
  //     type: 'ADD_TASK',
  //     name: "test",
  //     description: "test description",
  //     dueDate: "test date",
  //     created: "teset date again",
  //     id: 10
  //     }
  //     dispatch(action)
  // }

  render() {
    return (
      <React.Fragment>
        <HeaderControl />
        <ListControl taskList={this.props.taskList}/>
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