<template>
  <div class="pagination">
    <v-input
      :type="'number'"
      :width="60"
      :max="$options.constants.MAX_LIMIT"
      :min="$options.constants.MIN_LIMIT"
      :maxlength="2"
      :value="limit"
      @input="handleLimitChange"
    />
    <v-button
      :disabled="isFirstPage"
      @click="handlePrevPage"
      :label="$options.labels.prev"
    />
    <span class="pagination__label">{{ $options.labels.page }}: {{ page }}</span>
    <v-button
      :disabled="isLastPage"
      @click="handleNextPage"
      :label="$options.labels.next"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import { loadProductsAsync } from '@/store/actions/action-types';
import labels from '@/config/labels.json';
import { debounce } from '@/utils';
import constants from '@/config';

export default {
  name: 'PaginationBar',
  labels,
  constants,
  computed: {
    ...mapGetters(['isFirstPage', 'isLastPage']),
    ...mapState(['prevPage', 'page', 'nextPage', 'limit'])
  },
  methods: {
    ...mapActions({ loadProducts: loadProductsAsync }),
    handlePrevPage() {
      if (this.prevPage >= 1 && this.page !== this.prevPage) {
        this.loadProducts({ page: this.prevPage, currentLimit: this.limit });
      }
    },
    handleNextPage() {
      this.nextPage &&
        this.loadProducts({ page: this.nextPage, currentLimit: this.limit });
    },
    handleLimitChange($event) {
      debounce(() => {
        const maxLimit = Number(constants.MAX_LIMIT);
        const minLimit = Number(constants.MIN_LIMIT);
        let currentLimit = Number($event.target.value);
        if (currentLimit > maxLimit) {
          currentLimit = maxLimit;
        } else if (currentLimit < minLimit) {
          currentLimit = minLimit;
        }
        if (
          currentLimit === this.limit &&
          (currentLimit === maxLimit || currentLimit === minLimit)
        )
          return;

        this.loadProducts({ page: this.page, currentLimit });
      })();
    }
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
