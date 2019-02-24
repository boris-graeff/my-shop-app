<template>
  <div class="product-line">
    <div class="count">
      x{{ count }}
    </div>
    <div>
      <img :src="product.thumbnail.image_url" :alt="`${product.name} thumbnail`" />
    </div>
    <div class="content">
      <div class="name">{{ product.name }}</div>
      <div class="description">
        {{ product.tagline }}
      </div>
    </div>
    <div class="actions">
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
    align-items: center;

    img {
      width: 160px;
    }

    > div {
      padding: 20px;
    }
  }

  .name {
    font-weight: bold;
  }

  .count {
    width: 100px;
    text-align: center;
    font-size: 30px;
  }

  .actions {
    width: 200px;
    text-align: center;
  }

  .content {
    flex: 1;
  }


  @media screen and (max-width: 700px){
    .product-line {
      flex-direction: column;
    }
  }
</style>
