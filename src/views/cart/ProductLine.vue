<template>
  <div class="product-line">
    <div>
      <img :src="product.thumbnail.image_url" :alt="`${product.name} thumbnail`" />
    </div>
    <div>
      <div class="name">{{ product.name }}</div>
      <div class="description">
        {{ product.tagline }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: Object
    }
  }
</script>

<style scoped lang="scss">
  .product-line {
    display: flex;

    img {
      width: 160px;
    }

    > div {
      padding: 20px;
    }

    .name {
      font-weight: bold;
    }
  }
</style>
