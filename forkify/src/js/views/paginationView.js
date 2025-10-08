import View from './View.js';
import icons from 'url:../../img/icons.svg';
import { elems } from '../dom.js';

class PaginationView extends View {
  _parentElement = elems.results.pagination;
  _errorMsg = `No recipies found!`;
  _successMsg = ``;

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //page 1
    if (this._data.page === 1 && numPages > 1) {
      return `<button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    // page 1 no pages
    if (this._data.page === 1 && numPages === 1) {
      return '';
    }
    // last page
    if (this._data.page === numPages && numPages > 1) {
      return `<button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>`;
    }
    //other page
    if (this._data.page < numPages) {
      return `<button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>
          <button data-goto="${
            this._data.page + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
  }
}

export default new PaginationView();
