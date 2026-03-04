import React from 'react';

import { FcLike } from 'react-icons/fc';
import { FcCancel } from 'react-icons/fc';
import { FcNeutralDecision } from 'react-icons/fc';
import { FcBarChart } from 'react-icons/fc';

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
};

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: StatisticsProps) => {
  return (
    <div>
      <p>
        <FcLike /> {good}
      </p>
      <p>
        <FcNeutralDecision /> {neutral}
      </p>
      <p>
        <FcCancel /> {bad}
      </p>
      <p>
        <FcBarChart /> {total}
      </p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
