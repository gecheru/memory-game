import React, { FC } from 'react';
import './Statistic.css';

interface Props {
  title: string;
  count: number;
}

export const Statistic: FC<Props> = ({ title, count }) => {
  return (
    <div className="statistic">
      <h4 className="statistic__text statistic__title">{title}</h4>
      <span className="statistic__text statistic__count">{count}</span>
    </div>
  );
};
