import { profileTitle, profileDescription } from "../utils/constants";

class UserInfo {
  constructor(userName, userJob) {
    this.name = userName;
    this.job = userJob;
  }

  getUserInfo() {
    return {name: this.name, job: this.job};
  }

  setUserInfo() {
    profileTitle.textContent = this.name;
    profileDescription.textContent = this.job;
  }
}
