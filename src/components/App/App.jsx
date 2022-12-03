import Statistics from 'components/Statistics/Statistics.jsx';
import React from 'react'
import  Feedback  from '../Feedback/Feedback.jsx'


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <>
        <Feedback />
        <Statistics />
      </>
    )
  } 
}

export default App

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template FEEDBACK
//     </div>
//   );
// };
