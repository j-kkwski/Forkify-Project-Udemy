import { $ } from './helpers.js';
// import { $ } from './dom.js';

export const elems = {
  recipe: {
    container: $('.recipe'),
    servingsBtns: $('.recipe__details'),
  },
  search: {
    form: $('.search'),
    button: $('.btn search__btn'),
    input: $('.search__field'),
  },
  results: {
    container: $('.results'),
    pagination: $('.pagination'),
  },
  bookmarks: {
    container: $('.bookmarks__list'),
  },
  addRecipe: {
    form: $('.upload'),
    window: $('.add-recipe-window'),
    overlay: $('.overlay'),
    btnOpen: $('.nav__btn--add-recipe'),
    btnClose: $('.btn--close-modal'),
  },
};

elems.recipe.servingsBtns;
