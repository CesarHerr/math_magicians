import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Buttons(props) {
  const { name, setClass, onClick } = props;

  return (
    <button type="button" className={setClass(name)} onClick={() => onClick(name)}>{name}</button>

  );
}

function Display(props) {
  const { result } = props;
  return (
    <div className="display">{result}</div>
  );
}


export default Calculator;
