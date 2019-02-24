<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'products'}">Products</router-link> |
      <router-link :to="{name: 'cart'}">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>
