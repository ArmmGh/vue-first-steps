import constants from '@/config';
import { optimizeProductsImages } from '@/utils';
import parseLinkHeader from 'parse-link-header';
import axios from 'axios';

export const loadProductsInfo = async (currentPage, currentLimit) => {
  const url = new URL(constants.API);
  currentPage && url.searchParams.append('page', currentPage);
  currentLimit && url.searchParams.append('limit', currentLimit);

  const { data: products, headers } = await axios.get(url.href);
  const { prev, next } = parseLinkHeader(headers.link);

  let prevPage = 1;
  let nextPage = null;
  const limit = next ? next.limit : prev.limit;
  if (next) {
    nextPage = Number(next.page);
  }
  if (prev) {
    prevPage = Number(prev.page);
  }
  const page = nextPage ? nextPage - 1 : prevPage + 1;

  return {
    products: optimizeProductsImages(products, constants.IMG_WIDTH, constants.IMG_HEIGHT),
    page,
    nextPage,
    prevPage,
    limit: Number(limit)
  };
};
