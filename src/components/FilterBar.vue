<template>
  <v-input
    @input="onSearchInput"
    :type="'text'"
    :placeholder="$options.labels.placeholder"
  />
</template>

<script>
import { mapMutations } from 'vuex';
import { handleSearch } from '@/store/mutations/mutation-types';
import labels from '@/config/labels.json';

export default {
  name: 'FilterBar',
  labels,
  methods: {
    ...mapMutations({ handleSearch }),
    onSearchInput($event) {
      this.handleSearch($event.target.value);
    }
  }
};
</script>
