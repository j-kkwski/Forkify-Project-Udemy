import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
import { elems } from '../dom.js';

class ResultsView extends View {
  _parentElement = elems.results.container;
  _errorMsg = `No recipies found!`;
  _successMsg = ``;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
