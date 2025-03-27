import './css/App.css';
import Calculator from './components/Calculator.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
      </header>
      <Calculator className='calculator'/>
    </div>
  );
};

export default App;
