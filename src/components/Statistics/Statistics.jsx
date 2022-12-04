import React from "react";

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

export default Statistics;