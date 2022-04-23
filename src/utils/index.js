export const makeTextSearchable = (text) => text.trim().toLowerCase();

export const optimizeProductsImages = (products, width, height) =>
  products.map((product) => ({ ...product, download_url: changeImageSize(product.download_url, width, height) }));

export const debounce = (fn, delay = 500) => {
  let timeout = null;
  return function (...args) {
    clearTimeout(timeout);
    const context = this;
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const filterProducts = (products, keyword) => products.filter((product) => makeTextSearchable(product.author).includes(keyword));

export const navigateTo = (url, newTab = true) => {
  window.open(url, newTab ? '_blank' : '');
};

const changeImageSize = (imageUrl, width, height) => [...imageUrl.split('/').slice(0, -2), width, height].join('/');
