import React from 'react';

const Feedback = ({typesButton, ratingButtonClick}) => {    
    return (
        <div>
            <h1>Please leave feedback</h1>
            <ul>
            {typesButton.map(type => {
                return (
                        <button
                            key={type}
                            type="button"
                            onClick={ratingButtonClick}
                        >
                            {type}
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

export default Feedback;