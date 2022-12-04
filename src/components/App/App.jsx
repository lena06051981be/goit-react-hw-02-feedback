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

  ratingButtonClick = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1 }));
      console.log(options);
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
    const options = Object.keys(this.state);

    return (
      <>
        <Feedback 
          options={options}
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

