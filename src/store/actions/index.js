import { loadProductsInfo } from '@/services';
import { setLimit, setPageConfigs, setProducts } from '../mutations/mutation-types';
import { loadProductsAsync } from './action-types';

export const actions = {
  async [loadProductsAsync]({ commit }, { page: currentPage, currentLimit }) {
    const { products, page, limit, prevPage, nextPage } = await loadProductsInfo(currentPage, currentLimit);

    commit(setProducts, products);
    commit(setPageConfigs, { prevPage, page, nextPage });
    commit(setLimit, limit);
  }
};
