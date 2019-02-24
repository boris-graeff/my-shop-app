<template>
  <div class="product-tile">
    <img :src="product.thumbnail.image_url" :alt="`${product.name} thumbnail`" />
    <div class="name">{{ product.name }}</div>
    <div class="description">
      {{ product.tagline }}
    </div>
    <button type="button" @click="addProductToCart(product)">
      Add to cart
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      product: Object
    },
    methods: {
      ...mapActions({
        addProductToCart: 'cart/addProduct'
      })
    }
  }
</script>

<style scoped lang="scss">
  .product-tile {
    padding: 20px;

    img {
      margin-bottom: 10px;
    }

    .name {
      font-weight: bold;
      margin-bottom: 10px;
    }

    button {
      margin-top: 10px;
    }
  }
</style>
