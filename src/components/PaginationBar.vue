<template>
  <div class="pagination">
    <v-input
      :type="'number'"
      :width="60"
      :max="constants.MAX_LIMIT"
      :min="constants.MIN_LIMIT"
      :maxlength="2"
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
import constants from '@/config';
import { debounce } from '@/utils';

export default {
  name: 'PaginationBar',
  data() {
    return {
      labels,
      constants
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
      const maxLimit = Number(constants.MAX_LIMIT);
      const minLimit = Number(constants.MIN_LIMIT);
      let currentLimit = Number($event.target.value);
      if (currentLimit > maxLimit) {
        currentLimit = maxLimit;
      } else if (currentLimit < minLimit) {
        currentLimit = minLimit;
      }
      if (
        currentLimit === store.state.limit &&
        (currentLimit === maxLimit || currentLimit === minLimit)
      )
        return;

      store.methods.loadProducts(store.state.page, currentLimit);
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
  left: calc(50% - 182.5px);
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
