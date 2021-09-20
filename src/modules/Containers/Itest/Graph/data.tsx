import React from 'react';

interface IDataItem {
  subject: string;
  totalScore: number;
  currentScore: number;
}

// * Data items --> Get from database
export const chartData: IDataItem[] = [
  { subject: 'Html', totalScore: 10, currentScore: 5 },
  { subject: 'Css', totalScore: 10, currentScore: 7 },
  { subject: 'Javascript', totalScore: 10, currentScore: 10 },
];

// export default chartData;
