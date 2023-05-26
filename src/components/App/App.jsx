import { Component } from 'react';
import styles from './App.module.css'
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (event) => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      }
    } )
  }

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(total, good);

    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification message="There is no feedback"/>}
        </Section>
      </div>
    )
  }
}

export default App;
