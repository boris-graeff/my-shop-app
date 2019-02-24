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
  @import '~@/style/reset.scss';
</style>

<style lang="scss" scoped>
  .app {
    max-width: 1000px;
    margin: auto;
  }
</style>
