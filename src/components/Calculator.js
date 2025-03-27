import React from "react";
import '../css/Calculator.css';

function Calculator({calculatorResult, handleCalculatorResult, calculatorInput, setCalculatorInput, clearInput, mathSymbols, handlePressButton}) {

  return (
    <div className="calculator-container">
      <div className='div-screen'>
        <input 
          type="text" 
          className="screen-input" 
          onChange={(event) => {
            const input = event.target.value;
            const lastChar = input.slice(-1); 
            if (mathSymbols.includes(lastChar)) {
              setCalculatorInput(input);
              console.log(input);
              handleCalculatorResult(input); 
            } else {
              console.log(lastChar + ' - No es un símbolo permitido');
            }
          }}
          value={calculatorInput}
        />
        <div className="screen-output">
          <span className="screen-equal">= </span>
          <span className="screen-result">{calculatorResult}</span>
        </div>
      </div>
      <div className='div-buttons'>
        <button className="btn-number btn-0" onClick={(e) => {
          handlePressButton(e.target.textContent);
        }}>0</button>
        <button className="btn-number btn-1" onClick={(e) => handlePressButton(e.target.textContent)}>1</button>
        <button className="btn-number btn-2" onClick={(e) => handlePressButton(e.target.textContent)}>2</button>
        <button className="btn-number btn-3" onClick={(e) => handlePressButton(e.target.textContent)}>3</button>
        <button className="btn-number btn-4" onClick={(e) => handlePressButton(e.target.textContent)}>4</button>
        <button className="btn-number btn-5" onClick={(e) => handlePressButton(e.target.textContent)}>5</button>
        <button className="btn-number btn-6" onClick={(e) => handlePressButton(e.target.textContent)}>6</button>
        <button className="btn-number btn-7" onClick={(e) => handlePressButton(e.target.textContent)}>7</button>
        <button className="btn-number btn-8" onClick={(e) => handlePressButton(e.target.textContent)}>8</button>
        <button className="btn-number btn-9" onClick={(e) => handlePressButton(e.target.textContent)}>9</button>
        <button className="btn-operator btn-add" onClick={(e) => handlePressButton('+')}><i className="fa-solid fa-lg fa-plus"></i></button>
        <button className="btn-operator btn-subtract" onClick={(e) => handlePressButton('-')}><i className="fa-solid fa-lg fa-minus"></i></button>
        <button className="btn-operator btn-multiply" onClick={(e) => handlePressButton('*')}><i className="fa-solid fa-lg fa-xmark"></i></button>
        <button className="btn-operator btn-divide" onClick={(e) => handlePressButton('/')}><i className="fa-solid fa-lg fa-divide"></i></button>
        <button className="btn-operator btn-equal" onClick={(e) => handlePressButton('')}><i className="fa-solid fa-lg fa-equals"></i></button>
        <button className="btn-operator btn-decimal" onClick={(e) => handlePressButton('.')}>0.</button>
        <button className="btn-operator btn-clear" 
          onClick={clearInput}
        >C</button>
      </div>
    </div>
  );
};

export default Calculator;