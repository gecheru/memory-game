import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { Statistic } from '../Statistic/Statistic';
import { GameField } from '../GameField/GameField';
import { ResultModal } from '../ResultModal/ResultModal';
import { CardType } from '../../types/CardType';
import { shuffleArray } from '../../utils/shuffleArray';
import { isCardsMatched } from '../../utils/isCardsMatched';
import { generateCards } from '../../utils/generateCards';
import { CardState } from '../../enums/CardState';

export const App: FC = () => {
  const requiredAttempts = 40;
  const cardsPairs = 8;
  const [attempts, setAttempts] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);
  const [opened, setOpened] = useState<CardType[]>([]);
  const [matched, setMatched] = useState<CardType[]>([]);

  const addOpened = (card: CardType) => {
    if (isModalOpen) {
      return;
    }
    setAttempts((prev) => prev + 1);
    setOpened((prev) => {
      if (prev.length === 2) {
        return [card];
      }
      return [...prev, card];
    });
  };

  const getCardState = (card: CardType): CardState => {
    if (opened.some((openedCard) => openedCard.id === card.id)) {
      return CardState.Opened;
    }
    if (matched.some((matchedCard) => matchedCard.id === card.id)) {
      return CardState.Hidden;
    }
    return CardState.Closed;
  };

  useEffect(() => {
    const cards = generateCards(cardsPairs);
    shuffleArray(cards);
    setCards(cards);
  }, []);

  useEffect(() => {
    if (opened.length < 2) {
      return;
    }

    if (opened.length === 2) {
      if (isCardsMatched(opened)) {
        setMatched((prev) => [...prev, ...opened]);
      }
      const timer = setTimeout(() => {
        setOpened([]);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [opened]);

  useEffect(() => {
    if (matched.length && matched.length === cards.length) {
      setIsModalOpen(true);
      setIsWin(true);
      return;
    }

    if (attempts === requiredAttempts) {
      setIsModalOpen(true);
      setIsWin(false);
      return;
    }
  }, [matched, attempts]);

  const reset = () => {
    setAttempts(0);
    setMatched([]);
    setOpened([]);
    setIsModalOpen(false);
    shuffleArray(cards);
  };

  return (
    <>
      <div className='app'>
        <div className='container'>
          <h1 className='head title'>Memory</h1>
          <Statistic title='moves made' count={attempts} />
          <GameField
            openCard={addOpened}
            cards={cards}
            getCardState={getCardState}
          />
          <Statistic title='moves left' count={requiredAttempts - attempts} />
        </div>
      </div>
      {isModalOpen && (
        <ResultModal attempts={attempts} isWin={isWin} clickHandler={reset} />
      )}
    </>
  );
};
