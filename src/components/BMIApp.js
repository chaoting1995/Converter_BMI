import React, { useState } from 'react';
import styled from '@emotion/styled';
import CardFooter from '../components/BMI/CardFooter';
import BMIConverter from '../components/BMI/BMIConverter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px hsl(0, 0%, 73.9%);
  &:hover {
    box-shadow: 0px 8px 50px rgba(0, 0, 0, 0.15);
  }
  border-radius: 20px;
  background-color: white;
  min-width: 400px;
  min-height: 320px;
  transition: 0.3s;
  ${'' /* color: #1ba6f1; */}
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 0px;
    ${'' /* border-top-left-radius: 20px;
  border-top-right-radius: 20px; */}
    ${'' /* background-color: #6cdfdd; */}
  ${'' /* color: white; */}
  font-size: 25px;
    font-weight: 600;
  }
`;

function BMIApp() {
  const [bmi, setBmi] = useState('');

  return (
    <>
      <Container>
        <h1>BMI Converter</h1>
        <BMIConverter bmi={bmi} setBmi={setBmi} />
        <CardFooter bmi={bmi} setBmi={setBmi} />
      </Container>
    </>
  );
}

export default BMIApp;
