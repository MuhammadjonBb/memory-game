import Card from "./Card.js";
import { cardImgArr } from "./cardsData.js";

export default class AmaznigCard extends Card {
  constructor(container, cardNumber, flip) {
    super(container, cardNumber, flip).card.append(this.img);
  }

  set cardNumber(value) {
    this._cardNumber = value;
    this.img = document.createElement('img');
    this.img.classList.add('card-icon');
    this.img.src = cardImgArr[value - 1];
    this.img.onerror = () => this.img.src = 'img/error-icon.png';
  }

  get cardNumber() {
    return this._cardNumber;
  }
}
