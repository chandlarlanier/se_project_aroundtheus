export default class UserInfo {
  constructor({ nameSelector , aboutMeSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
    this._avatarElement = document.querySelector(avatarSelector)
  }


  getUserInfo() {
    const userInfo = {name: this._nameElement.textContent, about: this._aboutMeElement.textContent, avatar: this._avatarElement.src};
    return userInfo;
  }

  
  setUserInfo({name, about, avatar}) {
    this._nameElement.textContent = name;
    this._aboutMeElement.textContent = about;
    this._avatarElement.src = avatar;
  }
}
