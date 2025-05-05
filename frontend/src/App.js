import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CO2 footprint
        </p>
      </header>
        <Button>test</Button>
    </div>
  );
}

export default App;
