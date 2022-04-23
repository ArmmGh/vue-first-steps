import { reactive, readonly } from 'vue';
import methods from '@/store/methods';

const state = reactive({
  products: [],
  page: 1,
  prevPage: null,
  nextPage: null,
  limit: null,
  searchText: ''
});

export default {
  //readonly to prevent modifing state outside the store
  state: readonly(state),
  methods: methods(state)
};
