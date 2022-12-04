import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, PositivePercentage}) => {
    return (
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>PositivePercentage: {PositivePercentage} %</li>
            </ul>
        </div>
    )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    PositivePercentage: PropTypes.number.isRequired,
}

export default Statistics;