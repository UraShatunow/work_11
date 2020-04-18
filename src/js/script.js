import {Api} from "./Api.js";
import {Card} from "./Card.js";
import {Cardlist} from "./Cardlist.js";
import {FormValidator} from "./FormValidator.js";
import {Popup} from "./Popup.js";
import {UserInfo} from "./UserInfo.js";

export default (function () {

  const api = new Api({
    baseUrl: 'https://praktikum.tk/cohort8',
    headers: {
      authorization: 'd8c0e2d0-4c6e-4bc9-890f-8f49994b6418',
      'Content-Type': 'application/json'
    }
  });

  const popupForm = document.querySelector('.popup__form');
  const editPopupForm = document.querySelector('.edit-popup__form');
  const editPopupInputName = document.querySelector('.edit-popup__input_type_name');
  const editPopupInputInfo = document.querySelector('.edit-popup__input_type_info');
  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');
  const avatar = document.querySelector('.user-info__photo');
  const popupInputName = document.querySelector('.popup__input_type_name');
  const popupInputLink = document.querySelector('.popup__input_type_link-url');

  const userInfo = new UserInfo(api
    , editPopupInputName
    , editPopupInputInfo
    , userInfoName
    , userInfoJob
    , avatar
  );

  userInfo.apiGetUserInfo();



  const editNameFormValidator = new FormValidator(document.querySelector('.edit-popup__input_type_name'));
  const editInfoFormValidator = new FormValidator(document.querySelector('.edit-popup__input_type_info'));
  const popupInputTypeName = new FormValidator(document.querySelector('.popup__input_type_name'));
  const popupInputTypeUrl = new FormValidator(document.querySelector('.popup__input_type_link-url'));

  const newCard = new Card(name, link);
  const newCardList = new Cardlist(document.querySelector('.places-list'), newCard, api);

  newCardList.render();
  popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
 
    if (popupInputName.value === '' || popupInputLink.value === '') {

      document.querySelector('.popup__button').setAttribute('disabled', true);
      document.querySelector('.popup__button').classList.add('popup__button_unactive');

      return false;
    }

    else {
      newCardList.addCard(popupForm.elements.name.value, popupForm.elements.link.value);

      document.querySelector('.popup__button').removeAttribute('disabled');
      document.querySelector('.popup__button').classList.remove('popup__button_unactive');

      popupForm.reset();
      document.querySelector('.popup').classList.remove('popup_is-opened');
    }

  });

  editPopupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    api.userInfoSave(editPopupInputName.value, editPopupInputInfo.value)
      .then(() => {
        userInfo.updateUserInfo();
        document.querySelector('.edit-popup').classList.remove('edit-popup_is-opened');
        editPopupForm.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  });


  document.querySelector('.edit-popup__input_type_name').addEventListener('input', (event) => {
    editNameFormValidator.checkInputValidity(event.target);
    editNameFormValidator.setSubmitButtonState(event.target);
  });
  document.querySelector('.edit-popup__input_type_info').addEventListener('input', (event) => {
    editInfoFormValidator.checkInputValidity(event.target);
    editInfoFormValidator.setSubmitButtonState(event.target);
  });
  document.querySelector('.popup__input_type_name').addEventListener('input', (event) => {
    popupInputTypeName.checkInputValidity(event.target);
    popupInputTypeName.setSubmitButtonState(event.target);
  });
  document.querySelector('.popup__input_type_link-url').addEventListener('input', (event) => {
    popupInputTypeUrl.checkInputValidity(event.target);
    popupInputTypeUrl.setSubmitButtonState(event.target);
  });


  const newPopup = new Popup(document.querySelector('.popup'), userInfo);
  const newEditPopup = new Popup(document.querySelector('.edit-popup'), userInfo);
  const newImagePopup = new Popup(document.querySelector('.image-popup'), userInfo);

  document.querySelector('.root').addEventListener('click', (event) => newPopup.open(event));
  document.querySelector('.root').addEventListener('click', (event) => newPopup.close(event));

  document.querySelector('.root').addEventListener('click', (event) => newEditPopup.open(event));
  document.querySelector('.root').addEventListener('click', (event) => newEditPopup.close(event));

  document.querySelector('.root').addEventListener('click', (event) => newImagePopup.open(event));
  document.querySelector('.root').addEventListener('click', (event) => newImagePopup.close(event));


})();

