import './css/App.css';
import Calculator from './components/Calculator.js';
import { useState } from 'react';

const mathSymbols = ['',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Números
  '+', '-', '*', '/', // Operadores básicos
  '.', '(', ')'       // Otros símbolos comunes
];

function App() {
  const [calculatorResult, setCalculatorResult] = useState(0);
  const [calculatorInput, setCalculatorInput] = useState('');

  const clearInput = () => {
    setCalculatorInput('');
    setCalculatorResult(0);
  };

  const handleCalculatorResult = (input) => {
    if (input.length < 2) {
      setCalculatorResult('...');
      return;
    }
    try {
      // Evalúa la expresión de manera segura
      const result = eval(input);
      if (isNaN(result) || typeof result !== 'number') {
        throw new Error('Expresión inválida');
      }
      setCalculatorResult(result);
    } catch (error) {
      console.error('Error al calcular la expresión:', error.message);
      setCalculatorResult('Error');
    }
  };

  const handlePressButton = (text) => {
    const input = calculatorInput + text;
    setCalculatorInput(input);
    handleCalculatorResult(input);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
      </header>
      <Calculator 
        className='calculator'
        calculatorResult={calculatorResult}
        setCalculatorResult={setCalculatorResult}
        calculatorInput={calculatorInput}
        setCalculatorInput={setCalculatorInput}
        clearInput={clearInput}
        mathSymbols={mathSymbols}
        handleCalculatorResult={handleCalculatorResult}
        handlePressButton={handlePressButton}/>
    </div>
  );
};

export default App;
