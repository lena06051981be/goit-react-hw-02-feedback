import React from 'react';

const FeedbaFeedbackOptions = ({options, onLeaveFeedback}) => {    
    return (
        <div>
            <ul>
            {options.map(item => {
                return (
                        <button
                            key={item}
                            type="button"
                            onClick={() => {onLeaveFeedback(item)}}
                        >
                            {item}
                        </button>
                    );
            })}
            </ul>            
        </div>
    )
}

// return (
//     <div>
//         <h1>Please leave feedback</h1>
//         <ul>
//             <p>{good}</p>                    
//             <button type='botton' key={good} onClick={ratingButtonClick}>Good</button>
//             <button onClick={ratingButtonClick}>Neutral</button>
//             <button onClick={ratingButtonClick}>Bad</button>
//         </ul>            
//     </div>
// )
// }

export default FeedbaFeedbackOptions;