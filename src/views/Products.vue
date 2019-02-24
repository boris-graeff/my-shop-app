<template>
  <div class="products">
    <ul>
      <li v-for="product in products" :key="product.key" class="product">
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
  import { mapState, mapActions } from 'vuex'

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
      ...mapActions('products', {
        getProducts: 'getProducts'
      })
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
      width: 20%;
      padding: 20px;
    }
  }

  .product {
    padding: 20px;

    .title {
      font-weight: bold;
    }
  }
</style>
