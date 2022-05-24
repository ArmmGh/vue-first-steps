<template>
  <ul class="product__list">
    <ProductItem
      v-for="product in originalProducts"
      :key="product.id"
      :product="product"
      @onProductClick="handleProductClick"
    />
  </ul>
  <VModal :width="450" :showModal="showModal" @close="handleClose">
    <template #header>
      <h3>{{ selectedProduct.author }}</h3>
    </template>
    <template #body>
      <img
        :style="{ width: '100%' }"
        :src="selectedProduct.download_url"
        alt="image"
      />
    </template>
    <template #footer>
      <v-button :label="labels.navigate" @click="handleNavigate"></v-button>
    </template>
  </VModal>
</template>

<script>
import labels from '@/config/labels.json';
import { navigateTo } from '@/utils';
import ProductItem from '@/components/ProductItem.vue';
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions, mapGetters, mapState } from 'vuex';
import { loadProductsAsync } from '@/store/actions/action-types';

export default {
  name: 'ProductList',
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
    },
    ...mapActions({ loadProducts: loadProductsAsync })
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
    ProductItem,
    VModal: defineAsyncComponent({
      loader: () => import(/* webpackPrefetch: true */ './common/v-modal.vue')
    })
  },
  computed: {
    ...mapState(['products', 'searchText', 'page', 'limit']),
    ...mapGetters(['filterProducts'])
  },
  watch: {
    products() {
      this.originalProducts = this.filterProducts(this.searchText);
      this.$router.push({
        name: 'Home',
        query: {
          page: this.page,
          limit: this.limit
        },
        replace: true
      });
    },
    searchText(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.originalProducts = this.filterProducts(this.searchText);
      }
    }
  },
  mounted() {
    const { page, limit } = this.$route.query;
    this.loadProducts({ page, currentLimit: limit });
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
