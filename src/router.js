import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products'
import Cart from './views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '*',
      redirect: {
        name: 'products'
      }
    }
  ]
})
