const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS'

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    [ADD_PRODUCT] (state, product) {
      state.products.push(product)
    },
    [REMOVE_PRODUCTS] (state, product) {
      state.products = state.products.filter(({ id }) => id !== product.id)
    }
  },
  actions: {
    addProduct (store, product) {
      store.commit(ADD_PRODUCT, product)
    },
    removeProducts (store, product) {
      store.commit(REMOVE_PRODUCTS, product)
    }
  },
  getters: {
    cartSize: ({ products }) => products.length,
    groupedProducts: ({ products }) => products.reduce((res, product) => {
      const sameProduct = res.find(group => group.product.id === product.id)
      if (sameProduct) sameProduct.count += 1
      else res.push({ product, count: 1})
      return res
    }, [])
  }
}
