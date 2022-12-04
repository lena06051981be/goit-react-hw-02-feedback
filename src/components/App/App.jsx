// import { type } from '@testing-library/user-event/dist/type/index.js';
import Statistics from 'components/Statistics/Statistics.jsx';
import React from 'react'
import  Feedback  from '../Feedback/Feedback.jsx'


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  ratingButtonClick = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    })); 
    console.log(item);
  };
 
  // ratingButtonClick = () => {this.setState({
  //   good: this.state.good + 33})};

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Feedback 
          options={Object.keys(this.state)}
          onButtonClick={this.ratingButtonClick} />
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </>
    )
  } 
}


export default App

