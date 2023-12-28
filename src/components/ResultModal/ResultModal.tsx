import React, { FC } from 'react';
import './ResultModal.css';
import { Button } from '../Button/Button';

interface Props {
  isWin: boolean;
  attempts: number;
  clickHandler: () => void;
}

export const ResultModal: FC<Props> = ({ isWin, attempts, clickHandler }) => {
  return (
    <div className="result-modal">
      <div className="result-modal__head">
        {isWin ? (
          <>
            <div>You win!</div>
            <div>You dit it in {attempts} moves</div>
          </>
        ) : (
          <>
            <div>You loose!</div>
            <div>You are out of moves</div>
          </>
        )}
      </div>
      <Button onClick={clickHandler}>play again</Button>
    </div>
  );
};
