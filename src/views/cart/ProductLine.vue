<template>
  <div class="product-line">
    <div>x{{ count }}</div>
    <div>
      <img :src="product.thumbnail.image_url" :alt="`${product.name} thumbnail`" />
    </div>
    <div>
      <div class="name">{{ product.name }}</div>
      <div class="description">
        {{ product.tagline }}
      </div>
    </div>
    <div>
      <button type="button" @click="removeProducts(product)">Remove</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      product: Object,
      count: Number
    },
    methods: {
      ...mapActions({
        removeProducts: 'cart/removeProducts'
      })
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

    button {
      border: none;
      padding: 10px;
    }
  }
</style>
