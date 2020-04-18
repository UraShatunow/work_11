export class Cardlist {
  constructor (container, newCard, api) {
    this.container = container;
    this.newCard = newCard;
    this.api = api;
    this.arr = [];
  }

  addCard(name, link) {
    const card = this.newCard.createCard(name, link);  
    card.querySelector('.place-card__like-icon').addEventListener('click', this.newCard.like);
    card.querySelector('.place-card__delete-icon').addEventListener('click', this.newCard.remove);

    this.arr.push(card);
    this.container.appendChild(card);
  }


  render() {
    this.api.getInitialCards()
      .then((arrSlice) => {
      arrSlice.forEach((item) => {
        this.addCard(item.name, item.link);
      }) 
    })
  }
}