<template>
  <div class="cart">
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.key"
          class="product">
        <ProductLine :product="product"/>
      </li>
    </ul>
    <div v-else class="placeholder">
      Your cart is empty :(
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ProductLine from './cart/ProductLine'

  export default {
    name: 'cart',
    computed: {
      ...mapState('cart', {
        products: state => state.products
      })
    },
    components: {
      ProductLine
    }
  }
</script>

<style scoped lang="scss">
  .placeholder {
    color: grey;
    font-size: 20px;
    padding: 60px 20px;
    text-align: center;
  }
</style>
