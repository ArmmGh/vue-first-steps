<template>
  <router-view />
</template>

<script>
import store from '@/store';

export default {
  name: 'App',
  provide: {
    store
  }
};
</script>

<style lang="scss">
@import '~@/assets/styles/global.scss';
</style>
