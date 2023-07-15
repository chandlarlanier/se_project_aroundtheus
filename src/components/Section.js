export default class Section {
  constructor({renderer}, selector) {
    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  renderItems(data) {
    data.forEach(this._renderer);
  }

  addItem(item) {
    this._element.prepend(item);
  }
}
