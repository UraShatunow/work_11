export class FormValidator {
    constructor (element, validator) {
      this.element = element;
      this.errorElement = document.querySelector(`#error-${element.id}`);
      this.validator = validator;
    }
  
    checkInputValidity (element) {
  
      if (element.validity) {
  
        if (element.validity.valueMissing) {

          this.errorElement.textContent = 'Это обязательное поле';
          return false;

        } else if (element.validity.tooShort) 
        {
          this.errorElement.textContent = 'Должно быть от 2 до 30 символов';
          return false;
        }
    
      }
    
      this.errorElement.textContent = '';
    
      return true;
    }

    setSubmitButtonState (element) {
  
      if (element.validity) {
  
        if (element.validity.valueMissing) {
          document.querySelector('.edit-popup__button').setAttribute('disabled', true);
          document.querySelector('.edit-popup__button').classList.add('edit-popup__button_unactive');
          document.querySelector('.popup__button').setAttribute('disabled', true);
          document.querySelector('.popup__button').classList.add('popup__button_unactive');
          return false;
        } else if (element.validity.tooShort) {
          document.querySelector('.edit-popup__button').setAttribute('disabled', true);
          document.querySelector('.edit-popup__button').classList.add('edit-popup__button_unactive');
          document.querySelector('.popup__button').setAttribute('disabled', true);
          document.querySelector('.popup__button').classList.add('popup__button_unactive');
          return false;
        }
    
      }
  
      document.querySelector('.edit-popup__button').removeAttribute('disabled');
      document.querySelector('.edit-popup__button').classList.remove('edit-popup__button_unactive');
      document.querySelector('.popup__button').removeAttribute('disabled');
      document.querySelector('.popup__button').classList.remove('popup__button_unactive');
    
      return true;
    }
}