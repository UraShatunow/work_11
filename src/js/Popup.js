export class Popup {
    constructor(popup, userInfo) {
      this.popup = popup;
      this.userInfo = userInfo;
    }

    open (event) {
      if (event.target.classList.contains('user-info__button')) {
        this.popup.classList.add('popup_is-opened');
        document.querySelector('.popup__button').setAttribute('disabled', true);
        document.querySelector('.popup__button').classList.add('popup__button_unactive');
      }

      if (event.target.classList.contains('user-info__edit-button')) {
        this.popup.classList.add('edit-popup_is-opened');
        document.querySelector('.edit-popup__button').removeAttribute('disabled');
        document.querySelector('.edit-popup__button').classList.remove('edit-popup__button_unactive');
        document.querySelector('#error-editName').textContent = '';
        document.querySelector('#error-info').textContent = '';
        
        this.userInfo.setUserInfo();
      }

      if (event.target.className === 'place-card__image') {
        this.popup.classList.add('image-popup_is-opened');
        document.querySelector('.image-popup__image').setAttribute('src', event.target.style.backgroundImage.slice(5, -2));
      }
    }

    close (event) {
      if (event.target.classList.contains('popup__close')) {
        this.popup.classList.remove('popup_is-opened');
      }

      if (event.target.classList.contains('edit-popup__close')) {
        this.popup.classList.remove('edit-popup_is-opened');
      }

      if (event.target.classList.contains('image-popup__close')) {
        this.popup.classList.remove('image-popup_is-opened');
      }
    }
  }