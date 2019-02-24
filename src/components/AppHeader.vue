<template>
  <header>
    <h1>My shop app</h1>

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
  @import '~@/style/vars';

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid $black;

    nav {
      display: flex;
    }

    ul {
      display: flex;
    }

    li {
      padding: 10px;
    }

    a {
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
