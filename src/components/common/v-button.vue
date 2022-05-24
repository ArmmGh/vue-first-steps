<template>
  <button class="v-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    label: {
      type: String,
      readonly: true
    }
  }
};
</script>

<style lang="scss" scoped>
.v-button {
  letter-spacing: 1px;
  background-color: $main-bg;
  border-radius: 5px;
  border-width: 0;
  box-shadow: $element-shadow;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 5px 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:disabled {
    cursor: default;
    opacity: 0.55;
  }
  &:focus {
    box-shadow: $element-shadow-focus;
  }
}
</style>
