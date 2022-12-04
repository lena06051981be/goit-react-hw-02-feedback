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

  ratingButtonClick = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1 }));
      console.log(event);
  }

  // ratingButtonClick = type => {
  //   this.setState(prevState => ({
  //     [type]: prevState[type] + 1,
  //   }));
  // };

  // ratingButtonClick() {
  //   this.setState((state) => {
  //     return {good: state.good + 22}
  //   });
  // };

 
  // ratingButtonClick = () => {this.setState({
  //   good: this.state.good + 33})};

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    const typesButton = Object.keys(this.state);

    return (
      <>
        <Feedback 
          typesButton={typesButton}
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

