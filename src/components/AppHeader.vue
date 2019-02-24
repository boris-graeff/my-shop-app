<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'products'}">Products</router-link>
        </li>
        <li>
          <router-link :to="{name: 'cart'}">Cart ({{ cartSize }})</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppHeader',
    computed: {
      ...mapGetters({
        cartSize: 'cart/cartSize'
      })
    }
  }
</script>


<style scoped lang="scss">
  header {
    ul {
      display: flex;
    }

    li {
      padding: 10px;

      :not(:last-child):after {
        content: ' | ';
      }
    }
  }
</style>
