import React, { useState } from 'react';

function BMIConverter(props) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const { setBmi, bmi } = props;

  const calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0;

  return (
    <>
      HEIGHT:
      <input
        type="number"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
          setBmi(calcBMI(+height, +weight));
        }}
      />
      cm
      <br />
      <input type="range" />
      <br />
      WEIGHT:
      <input
        type="number"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
          setBmi(calcBMI(+height, +weight));
        }}
      />
      kg
      <br />
      <input type="range" />
      <br />
      {/* <button onClick={() => setBmi(calcBMI(+height, +weight))}>計算</button>

      <button onClick={() => {
        setHeight('')
        setWeight('')
        setBmi('')
        }}>清除</button> */}
      <br />
      BMI<div>{bmi}</div>
      {/* 標準體重<div>{bmi}</div> */}
    </>
  );
}

export default BMIConverter;
