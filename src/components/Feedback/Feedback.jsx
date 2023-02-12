import Statistics from 'components/Statistics';
import { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = e => {
    return this.setState(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <h3 className={s.title}>Please leave feedback</h3>
        <div onClick={this.handleOnClick} className={s.btnTeam}>
          <button type="button" name="good" className={s.btn}>
            Good
          </button>
          <button type="button" name="neutral" className={s.btn}>
            Neutral
          </button>
          <button type="button" name="bad" className={s.btn}>
            Bad
          </button>
        </div>

        <Statistics state={this.state} />
      </>
    );
  }
}

export default Feedback;