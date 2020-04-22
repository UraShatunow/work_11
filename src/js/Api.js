export class Api {
  constructor(options) {
    this.options = options;
  }

  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: 'GET',
      headers: this.options.headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        let arr = [];
        data.forEach((element) => {
          arr.push({ name: element.name, link: element.link });
        });
        return arr.slice(-20);
      })
      .catch((err) => {
        console.log('Ошибка загрузки карточек')
        return Promise.reject(err);
      });
  }

  userInfoLoad() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.options.headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch((err) => {
        console.log('Ошибка заргузки информации о пользователе')
        return Promise.reject(err);
      });

  }

  userInfoSave(nameNew, aboutNew) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({
        name: nameNew, 
        about: aboutNew 
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch((err) => {
        console.log('Ошибка передачи сохраненных данных')
        return Promise.reject(err);
      });


  }

  postAvatar(avatar) {
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch((err) => {
        console.log('Ошибка загрузки аватара')
        return Promise.reject(err);
      });
  }

}
