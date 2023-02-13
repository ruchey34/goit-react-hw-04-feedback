import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ good, bad, neutral }) {
  let totalValue = good + neutral + bad;
  let totalPercent = ((good / totalValue) * 100).toFixed(1);

  return (
    <>
      <h3 className={s.titleStat}>Statistics</h3>
      {!totalValue ? (
        <p className={s.notiStat}>No feedback given</p>
      ) : (
        <ul className={s.listTeam}>
          <li className={s.itemStat}>Good: {good}</li>
          <li className={s.itemStat}>Neutral: {neutral}</li>
          <li className={s.itemStat}>Bad: {bad}</li>
          <li className={s.itemStat}>Total: {totalValue}</li>
          <li className={s.itemStat}>Positive feedback: {totalPercent}%</li>
        </ul>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};