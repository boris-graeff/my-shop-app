<template>
  <div class="products">
    <ul>
      <li v-for="product in products" :key="product.key" class="product">
        <ProductTile :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ProductTile from './products/ProductTile'

  export default {
    name: 'products',
    data() {
      return {
        isLoading: true
      }
    },
    async mounted () {
      try {
        await this.getProducts()
      }
      finally {
        this.isLoading = false
      }
    },
    computed: {
      ...mapState('products', {
        products: state => state.products
      })
    },
    methods: {
      ...mapActions({
        getProducts: 'products/getProducts'
      })
    },
    components: {
      ProductTile
    }
  }
</script>

<style scoped lang="scss">

  .products {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      width: 33.33%;

      &:nth-child(odd) {
        background: #f1f1f1;
      }
    }
  }

  @media screen and (max-width: 600px){
    .products li {
      width: 100%;
    }
  }
</style>
