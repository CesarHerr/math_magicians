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

const allButtons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Calculator() {
  const [onDisplay, setOnDisplay] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const setClass = (name) => {
    let btnClass = 'btn';
    if (name === '÷' || name === 'x' || name === '-' || name === '+' || name === '=') {
      btnClass = 'btn orange';
    } else if (name === '0') {
      btnClass = 'btn zero';
    }

    return btnClass;
  };

  const handleButton = (name) => {
    setOnDisplay(calculate(onDisplay, name));
  };

  return (
    <div className="calculator-container">
      <Display result={onDisplay.next || onDisplay.total || '0'} />
      {
        allButtons.map((name) => (
          <Buttons
            onClick={handleButton}
            key={name}
            name={name}
            setClass={setClass}

          />
        ))
      }
    </div>
  );
}

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  setClass: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

Display.propTypes = {
  result: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Calculator;
