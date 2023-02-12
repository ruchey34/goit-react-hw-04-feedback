import s from './Statistics.module.css';

function Statistics({ state }) {
  let countTotal = state.good + state.neutral + state.bad;
  let positiveFeedback = ((state.good / countTotal) * 100).toFixed(1);
  return (
    <>
      <h3 className={s.titleStat}>Statistics</h3>
      {!countTotal ? (
        <p className={s.notiStat}>No feedback given</p>
      ) : (
        <ul className={s.listTeam}>
          <li className={s.itemsStat}>Good: {state.good}</li>
          <li className={s.itemsStat}>Neutral: {state.neutral}</li>
          <li className={s.itemsStat}>Bad: {state.bad}</li>
          <li className={s.itemsStat}>Total: {countTotal}</li>
          <li className={s.itemsStat}>
            Positive feedback: {positiveFeedback}%
          </li>
        </ul>
      )}
    </>
  );
}

export default Statistics;