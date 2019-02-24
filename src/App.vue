<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            <router-link :to="{name: 'products'}">Products</router-link>
          </li>
          <li>
            <router-link :to="{name: 'cart'}">Cart</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~@/style/reset.scss';
</style>

<style scoped lang="scss">
  header {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
    }

    li {
      padding: 10px;

      :not(:last-child):after {
        content: ' | ';
      }
    }
  }
</style>
