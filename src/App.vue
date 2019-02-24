<template>
  <div id="app">
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
