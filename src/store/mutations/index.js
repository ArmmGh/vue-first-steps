import { makeTextSearchable } from '@/utils';
import { handleSearch, setPageConfigs, setProducts, setLimit, setLoading } from './mutation-types';

export const mutations = {
  [handleSearch](state, searchText) {
    state.searchText = makeTextSearchable(searchText);
  },
  [setPageConfigs](state, { prevPage, page, nextPage }) {
    state.prevPage = prevPage;
    state.page = page;
    state.nextPage = nextPage;
  },
  [setProducts](state, products) {
    state.products = products;
  },
  [setLimit](state, limit) {
    state.limit = limit;
  },
  [setLoading](state, status) {
    state.loading = status;
  }
};
