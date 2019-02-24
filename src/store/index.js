import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    products,
    cart
  },
  plugins: [
    createPersistedState({
      paths: ['cart']
    })
  ]
})
