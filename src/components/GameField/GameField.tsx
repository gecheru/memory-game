import React, { FC } from 'react';
import './GameField.css';
import { Card } from '../Card/Card';
import { CardType } from '../../types/CardType';
import { CardState } from '../../enums/CardState';

interface Props {
  openCard: (card: CardType) => void;
  getCardState: (card: CardType) => CardState;
  cards: CardType[];
}

export const GameField: FC<Props> = ({ openCard, getCardState, cards }) => {
  return (
    <div className="game-field">
      {cards.map((card) => (
        <Card
          cardMeta={card}
          openHandler={openCard}
          state={getCardState(card)}
          key={card.id}
        />
      ))}
    </div>
  );
};
