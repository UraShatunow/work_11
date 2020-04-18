export class UserInfo {
  constructor(api, formName, formInfo, name, job, avatar) {
    this.api = api;
    this.formName = formName;
    this.formInfo = formInfo;
    this.name = name;
    this.job = job;
    this.avatar = avatar;
    this.usrName = '';
    this.usrJob = '';
    this.usrAvatar = '';

  }

  apiGetUserInfo() {
    this.api.userInfoLoad()
      .then((res) => {
        this.usrName = res.name;
        this.usrJob = res.about;
        this.usrAvatar = res.avatar;
      })
      .then(() => {
        this.setApiUserInfo();
      })
      .catch((e) => console.log(e))
  }

  setUserInfo() {
    this.formName.value = this.usrName;
    this.formInfo.value = this.usrJob;
    this.avatar.style.backgroundImage = 'url(' + this.usrAvatar + ')';
  }

  updateUserInfo() {
    this.usrName = this.formName.value;
    this.usrJob = this.formInfo.value;
    this.name.textContent = this.usrName;
    this.job.textContent = this.usrJob;
  }

  setApiUserInfo() {
    this.name.textContent = this.usrName;
    this.job.textContent = this.usrJob;
    this.formName.value = this.usrName;
    this.formInfo.value = this.usrJob;
    this.avatar.style.backgroundImage = 'url(' + this.usrAvatar + ')';
  }
}
