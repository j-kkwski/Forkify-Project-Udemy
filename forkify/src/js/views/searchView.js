import { elems } from '../dom.js';

class SearchView {
  _parentElement = elems.search.form;

  getQuery() {
    const query = elems.search.input.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    elems.search.input.value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
