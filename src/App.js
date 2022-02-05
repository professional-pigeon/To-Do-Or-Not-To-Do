import './App.css';
import DisplayControl from './display/DisplayControl.js';
import HeaderControl from './display/header/HeaderControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import About from './display/about/About';
import { useState } from 'react'



function App() {
  const [about, setAbout] = useState(false)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <HeaderControl setAbout={setAbout} />
        { about ? <About setAbout={setAbout} /> : <DisplayControl /> }
      </div>
    </DndProvider>
  );
}

export default App;
