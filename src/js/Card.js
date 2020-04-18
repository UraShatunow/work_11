export class Card {

  createCard(nameValue, linkValue) {

    const placeCard = document.createElement('div');
    const placeCardImage = document.createElement('div');
    const placeCardDescription = document.createElement('div');
    const placeCardDeleteIcon = document.createElement('button');
    const placeCardName = document.createElement('h3');
    const placeCardLikeIcon = document.createElement('button');

    placeCard.classList.add('place-card');
    placeCardImage.classList.add('place-card__image');
    placeCardImage.style.backgroundImage = `url('${linkValue}')`;
    placeCardDescription.classList.add('place-card__description');
    placeCardDeleteIcon.classList.add('place-card__delete-icon');
    placeCardName.classList.add('place-card__name');
    placeCardName.textContent = nameValue;
    placeCardLikeIcon.classList.add('place-card__like-icon');

    placeCardImage.appendChild(placeCardDeleteIcon);
    placeCardDescription.appendChild(placeCardName);
    placeCardDescription.appendChild(placeCardLikeIcon);
    placeCard.appendChild(placeCardImage);
    placeCard.appendChild(placeCardDescription);

    return placeCard;
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove(event) {
    event.stopPropagation();
    let placeCard = event.target.closest('.place-card');
    placeCard.remove();
  }

}