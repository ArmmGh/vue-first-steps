import { makeTextSearchable } from '@/utils';

export const getters = {
  filterProducts: (state) => (keyword) => state.products.filter((product) => makeTextSearchable(product.author).includes(keyword)),
  isFirstPage: (state) => state.prevPage < 1 || state.page === state.prevPage,
  isLastPage: (state) => !state.nextPage
};
