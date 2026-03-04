import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
// Styles
import { Container } from './Styled/Feedback.styled';

interface FeedbackState {
  good: number;
  neutral: number;
  bad: number;
}

type FeedbackType = 'good' | 'neutral' | 'bad';

const feedbackOptions: FeedbackType[] = ['good', 'neutral', 'bad'];

class Feedback extends Component<{}, FeedbackState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackType = (type: FeedbackType) => {
    this.setState(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((100 / totalFeedback) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={this.feedbackType}
        />
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
