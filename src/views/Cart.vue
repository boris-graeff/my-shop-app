<template>
  <div class="cart">
    <ul>
      <li v-for="product in products" :key="product.key"
          class="product">
        <ProductLine :product="product"/>
      </li>
    </ul>
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
