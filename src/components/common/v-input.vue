<template>
  <input
    class="v-input"
    :style="{ width: `${width}px` }"
    :placeholder="placeholder"
    @input="$emit('onInput')"
  />
</template>

<script>
export default {
  name: 'v-input',
  props: {
    placeholder: {
      type: String,
      readonly: true
    },
    width: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.v-input {
  border-radius: 5px;
  letter-spacing: 0.8px;
  border-width: 0;
  box-shadow: $element-shadow;
  outline: none;
  padding: 5px 10px;
  position: relative;
  text-transform: none;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  &:disabled {
    cursor: default;
  }
  &:focus {
    box-shadow: $element-shadow-focus;
  }
  &::placeholder {
    color: $input-placeholder;
  }
}
</style>
