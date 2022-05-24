<template>
  <v-input
    @input="onSearchInput"
    :type="'text'"
    :placeholder="labels.placeholder"
  />
</template>

<script>
import labels from '@/config/labels.json';
import { mapMutations } from 'vuex';
import { handleSearch } from '@/store/mutations/mutation-types';

export default {
  name: 'FilterBar',
  data() {
    return { labels };
  },
  methods: {
    ...mapMutations({ handleSearch }),
    onSearchInput($event) {
      this.handleSearch($event.target.value);
    }
  }
};
</script>
