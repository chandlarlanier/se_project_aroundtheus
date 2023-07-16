import { userNameElement, userJobElement, nameInput, jobInput } from "../utils/constants.js";

export default class UserInfo {
  constructor({ nameSelector , aboutMeSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
  }

  getUserInfo() {
    const userInfo = {name: this._nameElement.textContent, about: this._aboutMeElement.textContent};
    return userInfo;
  }

  setUserInfo({name, description}) {
    this._nameElement.textContent = name;
    this._aboutMeElement.textContent = description;
  }
}
