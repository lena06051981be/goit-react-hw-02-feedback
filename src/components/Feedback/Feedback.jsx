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


export default FeedbaFeedbackOptions;