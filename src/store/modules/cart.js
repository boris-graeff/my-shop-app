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
    groupedProducts: ({ products }) => products.reduce((res, product) => {
      const sameProduct = res.find(group => group.product.id === product.id)
      if (sameProduct) sameProduct.count += 1
      else res.push({ product, count: 1})
      return res
    }, [])
  }
}
