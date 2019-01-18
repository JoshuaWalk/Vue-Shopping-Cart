import shop from "@/api/shop";
export default {
  state: {
    items: [],
    checkoutStatus: null
  },

  getters: {
    cartProducts(state, getters, rootState) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(
          product => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    }
  },

  actions: {
    checkout({ state, commit }) {
      shop.buyProducts(
        state.items,
        () => {
          commit("emptyCart");
          commit("setCheckoutStatus", "success");
        },
        () => {
          commit("setCheckoutStatus", "failure");
        }
      );
    },
    addToCart({ state, getters, commit, rootState }, product) {
      if (getters.productIsInStock(product)) {
        const cartItem = state.items.find(item => item.id === product.id);
        if (!cartItem) {
          commit("pushToCart", product.id);
        } else {
          commit("increaseQuantity", cartItem);
        }
        commit("decreaseInventory", product);
      }
    }
  },

  mutations: {
    pushToCart(state, productId) {
      state.items.push({
        id: productId,
        quantity: 1
      });
    },
    increaseQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart(state) {
      state.items = [];
    }
  }
};
