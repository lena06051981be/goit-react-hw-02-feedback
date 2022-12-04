import PropTypes from 'prop-types';
import { FeedbackBtn } from './Feedback.styled';

const FeedbaFeedbackOptions = ({options, onLeaveFeedback}) => {    
    return (
        <div>
            <ul>
            {options.map(item => {
                return (
                        <FeedbackBtn
                            key={item}
                            type="button"
                            onClick={() => {onLeaveFeedback(item)}}
                        >
                            {item}
                        </FeedbackBtn>
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