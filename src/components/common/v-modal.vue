<template>
  <Transition name="modal">
    <div v-if="showModal" class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container" :style="{ width: getWidth }">
          <div class="modal__header">
            <slot name="header"></slot>
          </div>
          <div class="modal__body">
            <slot name="body">default body</slot>
          </div>
          <div class="modal__footer">
            <v-button
              :label="labels.close"
              class="modal-default-button"
              @click="$emit('close')"
            >
            </v-button>
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import labels from '@/config/labels.json';

export default {
  name: 'v-modal',
  props: {
    showModal: Boolean,
    width: Number
  },
  data() {
    return {
      labels
    };
  },
  computed: {
    getWidth() {
      return this.width ? `${this.width}px` : 'auto';
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: $modal-shadow;
    transition: all 0.3s ease;
  }
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &__footer {
    margin-top: 20px;
    button {
      margin: 0 10px;
    }
  }
}
// Transition styles by Vue
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  .modal__container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
