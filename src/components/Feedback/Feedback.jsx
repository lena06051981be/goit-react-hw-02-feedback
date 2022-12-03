import React from 'react';

// export
 const Feedback = () => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            <ul>                    
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
            </ul>
            <div>
                <h2>Statistics</h2>
                <ul>
                    <li>Good:</li>
                    <li>Neutral:</li>
                    <li>Bad:</li>
                </ul>
            </div>
        </div>
    )
}

export default Feedback;