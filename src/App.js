import './App.css';
import DisplayControl from './display/DisplayControl.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderControl from './display/header/HeaderControl';
import SidebarControl from './display/sidebar/SidebarControl';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <HeaderControl />
      <SidebarControl />
      <DisplayControl />
    </div>
  );
}

export default App;
