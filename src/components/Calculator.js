import React from "react";
import '../css/Calculator.css';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className='div-screen'>
        <span className="screen-input">1 + 1</span>
        <div className="screen-output">
          <span className="screen-equal">= </span>
          <span className="screen-result">2</span>
        </div>
        
      </div>
      <div className='div-buttons'>
        <button className="btn-number btn-0">0</button>
        <button className="btn-number btn-1">1</button>
        <button className="btn-number btn-2">2</button>
        <button className="btn-number btn-3">3</button>
        <button className="btn-number btn-4">4</button>
        <button className="btn-number btn-5">5</button>
        <button className="btn-number btn-6">6</button>
        <button className="btn-number btn-7">7</button>
        <button className="btn-number btn-8">8</button>
        <button className="btn-number btn-9">9</button>
        <button className="btn-operator btn-add"><i className="fa-solid fa-lg fa-plus"></i></button>
        <button className="btn-operator btn-subtract"><i className="fa-solid fa-lg fa-minus"></i></button>
        <button className="btn-operator btn-multiply"><i class="fa-solid fa-lg fa-xmark"></i></button>
        <button className="btn-operator btn-divide"><i class="fa-solid fa-lg fa-divide"></i></button>
        <button className="btn-operator btn-equal"><i class="fa-solid fa-lg fa-equals"></i></button>
        <button className="btn-operator btn-decimal">0.</button>
        <button className="btn-operator btn-clear">C</button>
      </div>
    </div>
  );
};

export default Calculator;