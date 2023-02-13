import propTypes from 'prop-types';
import s from './Feedback.module.css';
import { useState } from 'react';
import Statistics from '../Statistics/Statistics';

export default function Feedback() {
  const [{ good, neutral, bad }, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleOnClick = e => {
    const name = e.target.name;
    return setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  return (
    <>
      <h3 className={s.title}>Please leave feedback</h3>
      <div className={s.btnTeam} onClick={handleOnClick}>
        <button id={s.btn1} type="button" name="good" className={s.btn}>
          Good
        </button>
        <button id={s.btn2} type="button" name="neutral" className={s.btn}>
          Neutral
        </button>
        <button id={s.btn3} type="button" name="bad" className={s.btn}>
          Bad
        </button>
      </div>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
}

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};