import React, { FC } from 'react'
import './Card.css';
import { CardState } from '../../enums/CardState';
import { CardType } from '../../types/CardType';

interface Props {
  cardMeta: CardType;
  openHandler: (card: CardType) => void;
  state: CardState;
}

export const Card: FC<Props> = ({ cardMeta, openHandler, state }) => {
  const handleClick = () => {
      if (state === CardState.Closed) {
        openHandler(cardMeta);
      }
  }

  const getImage = () => {
    if (state === CardState.Closed) {
      return '';
    }

    return cardMeta.img;
  }

  return (
    <button 
      type='button' 
      className={`card card--${state}`} 
      onClick={handleClick}>
        {getImage() && <img src={getImage()} />}
      </button>
  )
}
