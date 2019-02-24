import { getProducts } from '@/api'

const SET_PRODUCTS = 'SET_PRODUCTS'

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    [SET_PRODUCTS] (state, products) {
      state.products = products
    }
  },
  actions: {
    async getProducts (store) {
      const response = await getProducts()
      store.commit(SET_PRODUCTS, response.data.posts)
    }
  }
}
