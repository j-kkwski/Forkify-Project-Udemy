import View from './View.js';
import icons from 'url:../../img/icons.svg';
import { elems } from '../dom.js';

class AddRecipeView extends View {
  _parentElement = elems.addRecipe.form;
  _successMsg = `Recipe was successfully uploaded :)`;
  _errorMsg = `Something went wrong :(`;
  _window = elems.addRecipe.window;
  _overlay = elems.addRecipe.overlay;
  _btnOpen = elems.addRecipe.btnOpen;
  _btnClose = elems.addRecipe.btnClose;

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
