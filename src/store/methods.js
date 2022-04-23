import { loadProductsInfo } from '@/services';
import { makeTextSearchable } from '@/utils';

export default (state) => ({
  async loadProducts(currentPage, currentLimit) {
    const { products, page, limit, prevPage, nextPage } = await loadProductsInfo(currentPage, currentLimit);
    this.setProducts(products);
    this.setPageConfigs(prevPage, page, nextPage);
    this.setLimit(limit);
  },
  handleSearch(searchText) {
    state.searchText = makeTextSearchable(searchText);
  },
  setPageConfigs(prevPage, page, nextPage) {
    state.prevPage = prevPage;
    state.page = page;
    state.nextPage = nextPage;
  },
  setProducts(products) {
    state.products = products;
  },
  goNextPage() {
    state.nextPage && this.loadProducts(state.nextPage, state.limit);
  },
  goPrevPage() {
    if (state.prevPage >= 1 && state.page !== state.prevPage) {
      this.loadProducts(state.prevPage, state.limit);
    }
  },
  setLimit(limit) {
    state.limit = limit;
  }
});
