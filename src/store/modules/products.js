import shop from '@/api/shop'

export default {
  state: {
    items: []
  },
  getters: {
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0)
    },
    productIsInStock() {
      return product => {
        return product.inventory > 0
      }
    }
  },
  
  mutations: {
    setProducts(state, products) {
      state.items = products
    },

    decreaseInventory(state, product) {
      product.inventory--
    },

  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise(resolve => {
        shop.getProducts(products => {
          commit("setProducts", products)
          resolve()
        })
      })
    }
  },
};
