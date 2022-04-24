<template>
  <v-input
    @input="onSearchInput"
    :type="'text'"
    :placeholder="labels.placeholder"
  />
</template>

<script>
import store from '@/store';
import labels from '@/config/labels.json';

export default {
  name: 'FilterBar',
  inject: {
    store
  },
  data() {
    return { labels };
  },
  methods: {
    onSearchInput: ($event) => {
      store.methods.handleSearch($event.target.value);
    }
  }
};
</script>
