import { createStore } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const store = createStore({
  state: {
    products: [],
    page: 1,
    prevPage: null,
    nextPage: null,
    limit: 30,
    searchText: ''
  },
  actions,
  mutations,
  getters
});

export default store;
