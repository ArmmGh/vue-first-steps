<template>
  <FilterBar />
  <ProductList />
  <PaginationBar />
</template>

<script>
import store from '@/store';
import ProductList from '@/components/ProductList.vue';
import FilterBar from '@/components/FilterBar.vue';
import PaginationBar from '@/components/PaginationBar.vue';

export default {
  name: 'MainLayout',
  provide: {
    store
  },
  components: {
    ProductList,
    FilterBar,
    PaginationBar
  }
};
</script>

<style lang="scss">
</style>
