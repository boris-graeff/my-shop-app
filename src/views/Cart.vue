<template>
  <div class="cart">
    <ul v-if="groupedProducts.length">
      <li v-for="{ product, count } in groupedProducts" :key="product.key"
          class="product">
        <ProductLine :product="product" :count="count"/>
      </li>
    </ul>
    <div v-else class="placeholder">
      Your cart is empty :(
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProductLine from './cart/ProductLine'

  export default {
    name: 'cart',
    computed: {
      ...mapGetters({
        groupedProducts: 'cart/groupedProducts'
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
