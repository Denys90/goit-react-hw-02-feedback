import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  <div>
    <p>Good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>total: {total}</p>
    <p>positivePercentage: {positivePercentage}</p>
  </div>;
};

export default Statistics;
