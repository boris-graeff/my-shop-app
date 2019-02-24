<template>
  <div class="cart">
    <ul>
      <li v-for="product in products" :key="product.key"
          class="product" >
        <img :src="product.thumbnail.image_url" :alt="`${product.name} thumbnail`" />
        <div class="title">{{ product.name }}</div>
        <div class="description">
          {{ product.tagline }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

export default {
  name: 'cart',
  computed: {
    ...mapState('cart', {
      products: state => state.products
    })
  }
}
</script>
