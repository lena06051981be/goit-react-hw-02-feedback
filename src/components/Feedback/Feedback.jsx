import React from 'react';

// export
 const Feedback = ({ratingButtonClick}) => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            <ul>                    
                <button onClick={ratingButtonClick}>Good</button>
                <button onClick={ratingButtonClick}>Neutral</button>
                <button onClick={ratingButtonClick}>Bad</button>
            </ul>            
        </div>
    )
}

export default Feedback;