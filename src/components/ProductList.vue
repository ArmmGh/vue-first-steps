<template>
  <ul class="product__list">
    <ProductItem
      v-for="product in originalProducts"
      :key="product.id"
      :product="product"
      @onProductClick="handleProductClick"
    />
  </ul>
  <v-modal :width="450" :showModal="showModal" @close="handleClose">
    <template #header>
      <h3>{{ selectedProduct.author }}</h3>
    </template>
    <template #body>
      <img :src="selectedProduct.download_url" alt="image" />
    </template>
    <template #footer>
      <v-button :label="labels.navigate" @click="handleNavigate"></v-button>
    </template>
  </v-modal>
</template>

<script>
import store from '@/store';
import labels from '@/config/labels.json';
import { filterProducts, navigateTo } from '@/utils';
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'ProductList',
  inject: {
    store
  },
  methods: {
    handleNavigate() {
      navigateTo(this.selectedProduct.url);
    },
    handleProductClick(product) {
      this.showModal = true;
      this.selectedProduct = product;
    },
    handleClose() {
      this.showModal = false;
    }
  },
  data() {
    return {
      originalProducts: [],
      selectedProduct: null,
      showModal: false,
      labels
    };
  },
  components: {
    ProductItem
  },

  watch: {
    'store.state.products': {
      handler() {
        this.originalProducts = store.state.searchText
          ? filterProducts(store.state.products, store.state.searchText)
          : store.state.products;

        this.$router.push({
          name: 'Home',
          query: {
            page: store.state.page,
            limit: store.state.limit
          },
          replace: true
        });
      }
    },
    'store.state.searchText': {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.originalProducts = filterProducts(
            store.state.products,
            store.state.searchText
          );
        }
      }
    }
  },
  mounted() {
    const { page, limit } = this.$route.query;
    store.methods.loadProducts(page, limit);
  }
};
</script>

<style scoped>
.product__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0 0 65px;
}
</style>
