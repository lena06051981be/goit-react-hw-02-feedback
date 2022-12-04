import Statistics from 'components/Statistics/Statistics.jsx';
import React from 'react'
import  Feedback  from '../Feedback/Feedback.jsx'


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  ratingButtonClick = good => {
    this.setState(prevState => ({
      good: prevState + 1,
    }));
  };

 
  // ratingButtonClick = () => {this.setState({
  //   good: this.state.good + 33})};

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <>
        <Feedback 
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        onButtonClick={this.ratingButtonClick} />
        <Statistics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    )
  } 
}


export default App

