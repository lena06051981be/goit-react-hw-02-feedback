import React from 'react';

// export
 const Feedback = ({raitingButtonClick}) => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            <ul>                    
                <button onClick={raitingButtonClick}>Good</button>
                <button onClick={raitingButtonClick}>Neutral</button>
                <button onClick={raitingButtonClick}>Bad</button>
            </ul>            
        </div>
    )
}

export default Feedback;