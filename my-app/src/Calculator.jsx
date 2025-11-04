import React from 'react';

function Calculator() {

  function calculate(op) {
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    let result = 0;

    if (op === 'add') result = a + b;
    else if (op === 'sub') result = a - b;
    else if (op === 'mul') result = a * b;
    else if (op === 'div') {
      if (b === 0) result = 'Cannot divide by 0';
      else result = a / b;
    }

    document.getElementById('result').innerText = "Result: " + result;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Basic Calculator</h2>

      <input
        type="number"
        id="num1"
        placeholder="Enter first number"
        className="mb-2 p-2 rounded"
      />
      <input
        type="number"
        id="num2"
        placeholder="Enter second number"
        className="mb-4 p-2 rounded"
      />

      <div className="space-x-2 mb-4">
        <button onClick={() => calculate('add')} className="bg-gray-700 px-3 py-1 rounded">Add</button>
        <button onClick={() => calculate('sub')} className="bg-gray-700 px-3 py-1 rounded">Subtract</button>
        <button onClick={() => calculate('mul')} className="bg-gray-700 px-3 py-1 rounded">Multiply</button>
        <button onClick={() => calculate('div')} className="bg-gray-700 px-3 py-1 rounded">Divide</button>
      </div>

      <h3 id="result" className="text-lg">Result:</h3>
    </div>
  );
}

export default Calculator;
