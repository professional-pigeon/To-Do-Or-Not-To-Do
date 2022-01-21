import { render } from '@testing-library/react'
import React from 'react'
import HeaderControl from './header/headerControl'
import ListControl from './list/listControl'
import SidebarControl from './sidebar/sidebarControl'

class DisplayControl extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HeaderControl />
        <ListControl />
        <SidebarControl />
      </React.Fragment>
    )
  }
}

export default DisplayControl