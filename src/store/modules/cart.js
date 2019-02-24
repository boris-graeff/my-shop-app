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
    addProduct (store, product) {
      store.commit(ADD_PRODUCT, product)
    }
  },
  getters: {
    cartSize: ({ products }) => products.length,
  }
}
