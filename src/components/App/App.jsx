import { useState } from 'react';
import styles from './App.module.css'
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = (event) => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100);

  const isFedback = good || neutral || bad;

  return (
    <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {isFedback ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification message="There is no feedback"/>}
        </Section>
      </div>
  )
}

export default App;
