import { userNameElement, userJobElement, nameInput, jobInput } from "../utils/constants.js";

export default class UserInfo {
  constructor(userName, userJob) {
    this.name = userName;
    this.job = userJob;
  }

  getUserInfo() {
    return ({name: this.name, job: this.job});
  }

  setUserInfo() {
    this.name = nameInput.value;
    userNameElement.textContent = this.name;
    this.job = jobInput.value;
    userJobElement.textContent = this.job;
  }
}
