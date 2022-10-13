import  { useState  } from 'react';

import Layout from './Layout/Layout';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import CardInterface from './CardInterface/CardInterface';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
 
 
  const clickHandler = event => {
    switch (event.target.name){
      case 'good':
        return setGood(prevState => prevState + 1);
        case 'neutral':
          return setNeutral(prevState => prevState + 1);
          case 'bad':
            return setBad(prevState => prevState + 1);
    }
  };
  const total = good+neutral+bad; 

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100); 
   }; 
    return (
      <Layout>
        <h1>Home Work #2.1</h1>
        <CardInterface>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={clickHandler} />
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </CardInterface>
      </Layout>
    );
  }
  export default App;
