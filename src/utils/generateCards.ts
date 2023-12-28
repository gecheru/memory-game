import { CardType } from "../types/CardType";
import { CardName } from "../types/CardName";
import { getRandomArrayIndex } from "./getRandomArrayIndex";
import { images } from "../consts/images";
import { cardNames } from "../consts/cardNames";

export const generateCards: (pairs: number) => CardType[] = (pairs) => {
  const cards: CardName[] = [];
    for (let i = 0; i < pairs; i++) {
      const card: CardName =  i >= cardNames.length ? cardNames[getRandomArrayIndex(cardNames)] : cardNames[i];
      cards.push(card);
    }
    cards.push(...cards);
    return cards.map((card, index) => ({ name: card, id: index, img: images[card] }));
}