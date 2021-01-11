import './App.css';

import React, { useState } from 'react';

import CardFooter from './components/CardFooter';
import UnitControl from './components/UnitControl';
import UnitConverter from './components/UnitConverter';
import BMIConverter from './components/BMIConverter';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas, far);

function App() {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    /* box-shadow: 1px 1px 10px 1px #134c76, */
    boxShadow: '0px 0px 10px hsl(0, 0%, 73.9%)',
    /* box-shadow: '0px 8px 50px rgba(0, 0, 0, 0.15)', */
    borderRadius: '7px',
    background: 'white',
    minWidth: '440px',
    minHeight: '320px',
    color: '#1ba6f1',
  };
  const [inputValue, setInputValue] = useState(0);
  const [bmi, setBmi] = useState('');

  return (
    <div style={container}>
      <div className="card-header">BMI Converter</div>
      <div className="card-body">
        {/* <UnitControl /> */}
        {/* <UnitConverter
          bmi={bmi}
          setBmi={setBmi}
        /> */}
        <BMIConverter bmi={bmi} setBmi={setBmi} />
      </div>
      <CardFooter bmi={bmi} setBmi={setBmi} inputValue={inputValue} />
    </div>
  );
}

export default App;
