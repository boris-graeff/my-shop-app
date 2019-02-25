<template>
  <div id="app" class="app">
    <AppHeader />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato');
  @import '~@/style/reset';
  @import '~@/style/vars';

  button {
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    background: $grey;

    &:hover {
      background-color: rgba($grey, 0.7);
    }
  }
</style>

<style lang="scss" scoped>
  @import '~@/style/vars';

  .app {
    font-family: 'Lato', sans-serif;
    max-width: 1200px;
    margin: auto;
    color: $black;
  }
</style>
