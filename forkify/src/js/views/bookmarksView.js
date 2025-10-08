import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
import { elems } from '../dom.js';

class BookmarksView extends View {
  _parentElement = elems.bookmarks.container;
  _errorMsg = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  _successMsg = ``;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
