<template>
  <Transition>
    <div v-if="loading" class="overlay">
      <div class="overlay__loader">
        <div class="overlay__loader__item"></div>
        <div class="overlay__loader__item"></div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'v-loader',
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.overlay {
  position: fixed;
  background: $overlay;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;

  &__loader {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    left: calc(50% - 40px);
    top: calc(50% - 40px);

    &__item {
      position: absolute;
      border: 4px solid $main-bg;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

      &:nth-child(2) {
        animation-delay: -0.5s;

      }

    }

    @keyframes lds-ripple {
      0% {
        top: 46px;
        left: 46px;
        width: 0;
        height: 0;
        opacity: 0;
      }

      4.9% {
        top: 46px;
        left: 46px;
        width: 0;
        height: 0;
        opacity: 0;
      }

      5% {
        top: 46px;
        left: 46px;
        width: 0;
        height: 0;
        opacity: 1;
      }

      100% {
        top: 0px;
        left: 0px;
        width: 92px;
        height: 92px;
        opacity: 0;
      }
    }
  }

}
</style>
