
export default class Card {
  constructor(container, cardNumber, flip) {
    this.container = container;
    this.flip = flip;
    this.cardNumber = cardNumber;
    this.createElement();
  }

  createElement() {
    this.card = document.createElement('li');
    this.card.classList.add('card');
    this.card.textContent = this._cardNumber;
    this.card.addEventListener('click', () => this.flip(this));
    this.container.append(this.card);
    return this.card;
  }

  set cardNumber(value) {
    this._cardNumber = value;
  }

  get cardNumber() {
    return this._cardNumber;
  }
  set open(value) {
    if (this.success) return;
    this.card.classList.toggle('card-opened');
    this._open = value;
  }
  get open() {
    return this._open;
  }
  set success(value) {
    this._success = value;
  }
  get success() {
    return this._success;
  }
}
