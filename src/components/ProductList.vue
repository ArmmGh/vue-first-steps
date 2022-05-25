<template>
  <ul class="product__list">
    <ProductItem
      v-for="product in originalProducts"
      :key="product.id"
      :product="product"
      @onProductClick="handleProductClick"
    />
  </ul>
  <v-modal :width="450" ref="productModal">
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
      <v-button :label="$options.labels.navigate" @click="handleNavigate" />
    </template>
  </v-modal>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import { loadProductsAsync } from '@/store/actions/action-types';
import ProductItem from '@/components/ProductItem.vue';
import labels from '@/config/labels.json';
import { navigateTo } from '@/utils';

export default {
  name: 'ProductList',
  labels,
  data() {
    return {
      originalProducts: [],
      selectedProduct: null
    };
  },
  mounted() {
    const { page, limit } = this.$route.query;
    this.loadProducts({ page, currentLimit: limit });
  },
  computed: {
    ...mapState(['products', 'searchText', 'page', 'limit']),
    ...mapGetters(['filterProducts'])
  },
  methods: {
    handleNavigate() {
      navigateTo(this.selectedProduct.url);
    },
    handleProductClick(product) {
      this.selectedProduct = product;
      this.$refs.productModal.open();
    },
    ...mapActions({ loadProducts: loadProductsAsync })
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
  components: {
    ProductItem,
    VModal: defineAsyncComponent({
      loader: () => import(/* webpackPrefetch: true */ './common/v-modal.vue')
    })
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
