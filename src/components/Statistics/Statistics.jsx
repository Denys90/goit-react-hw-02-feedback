import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = () => {
    this.setState(prev => ({
      good: prev.good + 1,
    }));
  };
  neutral = () => {
    this.setState(prev => ({
      neutral: prev.neutral + 1,
    }));
  };
  bad = () => {
    this.setState(prev => ({
      bad: prev.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const totalPositiveInterest = Math.round((100 / totalFeedback) * good);
    return (
      <>
        <h1 className={css.title}>Please Leave feedback!</h1>
        <div className={css.FeedbackList}>
          <button className={css.btnFeedback} onClick={this.good}>
            Good
          </button>
          <button className={css.btnFeedback} onClick={this.neutral}>
            Neutral
          </button>
          <button className={css.btnFeedback} onClick={this.bad}>
            Bad
          </button>
        </div>
        <div className={css.statisticsList}>
          <h2 className={css.statistics}>Statistics</h2>
          <p className={css.statisticsItem}>Good:{this.state.good}</p>
          <p className={css.statisticsItem}>Neutral:{this.state.neutral}</p>
          <p className={css.statisticsItem}>Bad:{this.state.bad}</p>
          <p className={css.statisticsItem}>Total:{totalFeedback}</p>
          <p className={css.statisticsItem}>
            Positive feedback:{totalPositiveInterest}%
          </p>
        </div>
      </>
    );
  }
}

export default Statistics;
