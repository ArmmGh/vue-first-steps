<template>
  <div class="pagination">
    <v-input
      type="number"
      :width="60"
      :max="100"
      :value="store.state.limit"
      @input="handleLimitChange"
    />
    <v-button
      :disabled="isFirstPage"
      @onClick="store.methods.goPrevPage()"
      :label="labels.prev"
    />
    <span class="pagination__label"
      >{{ labels.page }}: {{ store.state.page }}</span
    >
    <v-button
      :disabled="isLastPage"
      @onClick="store.methods.goNextPage()"
      :label="labels.next"
    />
  </div>
</template>

<script>
import store from '@/store';
import labels from '@/config/labels.json';
import { debounce } from '@/utils';

export default {
  name: 'PaginationBar',
  props: {
    page: Number,
    limit: Number
  },
  data() {
    return {
      labels
    };
  },
  inject: {
    store
  },
  computed: {
    isFirstPage: () =>
      store.state.prevPage < 1 || store.state.page === store.state.prevPage,
    isLastPage: () => !store.state.nextPage
  },
  methods: {
    handleLimitChange: debounce(($event) => {
      let limit = $event.target.value;
      if (limit > 100) {
        limit = 100;
      }
      store.methods.setLimit(limit);
      store.methods.loadProducts(store.state.page, limit);
    })
  }
};
</script>

<style lang="scss">
.pagination {
  text-align: center;
  padding: 15px;
  width: 335px;
  position: fixed;
  bottom: 15px;
  left: calc(50% - 160px);
  border-radius: 10px;
  background: rgb(227 227 255 / 75%);
  box-shadow: $element-shadow;
  &__label {
    padding: 0 5px;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
