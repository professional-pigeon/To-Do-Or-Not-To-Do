import './App.css';
import DisplayControl from './display/DisplayControl.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderControl from './display/header/HeaderControl';
import { Container, Row, Col } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <HeaderControl />
        <DisplayControl />
      </div>
    </DndProvider>
  );
}

export default App;
