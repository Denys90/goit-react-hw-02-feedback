import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  <div>
    {options.map(option => (
      <button key={option} onClock={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>;
};

export default FeedbackOptions;
