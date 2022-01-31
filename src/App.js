import './App.css';
import DisplayControl from './display/DisplayControl.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderControl from './display/header/HeaderControl';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <HeaderControl />
      <DisplayControl />
    </div>
  );
}

export default App;
