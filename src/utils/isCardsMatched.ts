import { CardType } from "../types/CardType";

export const isCardsMatched = (cardArr: CardType[]): boolean => {
  const [firstCard, secondCard] = cardArr;
  return firstCard.name === secondCard.name;
}