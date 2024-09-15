import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      if (input === '') {
        setResult('Error');
      } else {
        const calculation = eval(input);
        setResult(calculation.toString());
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Calculator</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        style={{ width: '200px', height: '30px', fontSize: '20px', textAlign: 'right', marginBottom: '10px', borderRadius:'5px' }} 
      />
      <div style={{ marginTop: '10px', height: '30px', fontSize: '20px' }}>{result}</div>
      <div style={{ marginTop: '20px', display: 'inline-block' }}>
        {['7', '8', '9', '/'].map((symbol) => (
          <button 
            key={symbol} 
            onClick={() => handleButtonClick(symbol)} 
            style={{ width: '40px', height: '40px', margin: '5px', borderRadius:'5px' }}
          >
            {symbol}
          </button>
        ))}
        <br />
        {['4', '5', '6', '*'].map((symbol) => (
          <button 
            key={symbol} 
            onClick={() => handleButtonClick(symbol)} 
            style={{ width: '40px', height: '40px', margin: '5px', borderRadius:'5px' }}
          >
            {symbol}
          </button>
        ))}
        <br />
        {['1', '2', '3', '-'].map((symbol) => (
          <button 
            key={symbol} 
            onClick={() => handleButtonClick(symbol)} 
            style={{ width: '40px', height: '40px', margin: '5px', borderRadius:'5px' }}
          >
            {symbol}
          </button>
        ))}
        <br />
        {['0', '.', '=', '+'].map((symbol) => (
          <button 
            key={symbol} 
            onClick={() => symbol === '=' ? handleCalculate() : handleButtonClick(symbol)} 
            style={{ width: '40px', height: '40px', margin: '5px', borderRadius:'5px' }}
          >
            {symbol}
          </button>
        ))}
        <br />
        <button 
          onClick={handleClear} 
          style={{ width: '40px', height: '40px', margin: '5px', borderRadius:'5px' }}
        >
          C
        </button>
      </div>
    </div>
  );
}

export default App;