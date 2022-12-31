import AmaznigCard from "./AmazingCard.js";
import enableResetBtn from "./enableResetBtn.js";
import shuffle from "./shuffleArr.js";
import { cardNums } from "./cardsData.js";
import { setClose, setSuccess } from "./helpers.js";

const container = document.querySelector('.cards-wrap');
const stack = []; // тут будет хранится 1-ая выбранная карточка
const successCards = [];

function flip(card) {
  if (card.open || card.success) return;

  card.open = true;

  if (stack.map(card => card.open).length) {
    const card1 = card;
    const card2 = stack.pop();

    if (card1.cardNumber === card2.cardNumber) {
      setSuccess(card1, card2)
      setClose(card1, card2);
      successCards.push(card1, card2);
    } else setTimeout(() => setClose(card1, card2), 500);

  } else stack.push(card);

  if (successCards.length === 16) enableResetBtn(successCards, container);
}

function renderCard(i) {
  new AmaznigCard(container, i, function (card) {
    flip(card) // on-click
  });
}

export function createApp() {
  shuffle(cardNums);
  cardNums.forEach(i => renderCard(i));
}

createApp()
