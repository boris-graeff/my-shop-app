const ADD_PRODUCT = 'ADD_PRODUCT'

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    [ADD_PRODUCT] (state, product) {
      state.products.push(product)
    }
  },
  actions: {
    async addProduct (store, product) {
      store.commit(ADD_PRODUCT, product)
    }
  }
}
