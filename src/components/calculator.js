import React from 'react';
import PropTypes from 'prop-types';

function Calculator(props) {
  const {
    name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11,
    name12, name13, name14, name15, name16, name17, name18, name19,
  } = props;

  return (
    <div className="calculator-container">
      <Display />
      <button type="button" className="btn right">{name1}</button>
      <button type="button" className="btn center">{name2}</button>
      <button type="button" className="btn center">{name3}</button>
      <button type="button" className="btn center">{name4}</button>
      <button type="button" className="btn right">{name5}</button>
      <button type="button" className="btn center">{name6}</button>
      <button type="button" className="btn center">{name7}</button>
      <button type="button" className="btn center">{name8}</button>
      <button type="button" className="btn right">{name9}</button>
      <button type="button" className="btn center">{name10}</button>
      <button type="button" className="btn center">{name11}</button>
      <button type="button" className="btn center">{name12}</button>
      <button type="button" className="btn right">{name13}</button>
      <button type="button" className="btn center">{name14}</button>
      <button type="button" className="btn center">{name15}</button>
      <button type="button" className="btn center">{name16}</button>
      <button type="button" className="btn right">{name17}</button>
      <button type="button" className="btn center">{name18}</button>
      <button type="button" className="btn zero">{name19}</button>
    </div>
  );
}

function Display() {
  return (
    <div className="display">0</div>
  );
}

Calculator.propTypes = {
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string.isRequired,
  name3: PropTypes.string.isRequired,
  name4: PropTypes.string.isRequired,
  name5: PropTypes.string.isRequired,
  name10: PropTypes.number.isRequired,
  name11: PropTypes.number.isRequired,
  name12: PropTypes.number.isRequired,
  name13: PropTypes.string.isRequired,
  name14: PropTypes.number.isRequired,
  name15: PropTypes.number.isRequired,
  name16: PropTypes.number.isRequired,
  name17: PropTypes.string.isRequired,
  name18: PropTypes.string.isRequired,
  name19: PropTypes.number.isRequired,
  name6: PropTypes.number.isRequired,
  name7: PropTypes.number.isRequired,
  name8: PropTypes.number.isRequired,
  name9: PropTypes.string.isRequired,
};

export default Calculator;
