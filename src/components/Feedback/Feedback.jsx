import PropTypes from 'prop-types';

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

FeedbaFeedbackOptions.prototype = {
    // options: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(PropTypes.string,).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}


export default FeedbaFeedbackOptions;