<template>
  <li class="product" @click="$emit('onProductClick', product)">
    <div
      class="product__image"
      :style="{ backgroundImage: `url(${product.download_url})` }"
    ></div>
    <div class="product__info">
      <p class="product__info__id">
        {{ product.id }}
      </p>
      <p class="product__info__author">
        {{ product.author }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: Object
  },
  emits: {
    onProductClick: (value) => typeof value === 'object'
  }
};
</script>
<style lang="scss">
.product {
  padding: 12.5px;
  max-width: 375px;
  margin: 5px;
  flex: 1 0 245px;
  border-radius: 10px;
  border: 1px solid $product-border;
  background-color: #fff;
  transition: box-shadow 0.3s;
  cursor: pointer;
  overflow: hidden;
  &__image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 150px;
  }
  &__info {
    margin-top: 12.5px;
    font-size: 14px;
    display: flex;
    color: $base-text;
    &__id {
      margin: 0;
      font-weight: 600;
    }
    &__author {
      margin: 0 0 0 5px;
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  &:hover {
    box-shadow: $element-shadow-focus;
  }
}
</style>
