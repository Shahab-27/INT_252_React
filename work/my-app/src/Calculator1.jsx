import React from 'react';

class Calculator1 extends React.Component {

  Addition = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = `Result: ${num1 + num2}`;
  };

  Subtraction = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = `Result: ${num1 - num2}`;
  };

  Multiplication = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = `Result: ${num1 * num2}`;
  };

  Division = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    if (num2 === 0) {
      document.getElementById("result").innerText = `Cannot divide by zero`;
    } else {
      document.getElementById("result").innerText = `Result: ${num1 / num2}`;
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2 >Basic Calculator</h2>

        <input type="number" id="num1" placeholder="Enter first number" />
        <br /><br />
        <input type="number" id="num2" placeholder="Enter second number" />
        <br /><br />

        <button onClick={this.Addition}>Add</button>
        <button onClick={this.Subtraction}>Subtract</button>
        <button onClick={this.Multiplication}>Multiply</button>
        <button onClick={this.Division}>Divide</button>

        <h3 id="result">Result:</h3>
      </div>
    );
  }
}

export default Calculator1;
