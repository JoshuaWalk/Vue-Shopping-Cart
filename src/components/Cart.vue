<template>
  <div>
    <h1>Cart</h1>
    <ul style="list-style-type:none">
      <b-row class="justify-content-md-center">
        <li v-for="product in products" :key="product.id">
          <b-card style="max-width: 200px" class="product-card">
            {{product.title}}
            <br>
            {{`Price: $${product.price}`}}
            <br>
            {{`Quantity: ${product.quantity}`}}
            <br/>
            <b-button @click="removeItem(cartItem)">Remove</b-button>
          </b-card>
        </li>
      </b-row>
    </ul>
    <template v-if="total === 0">
      <b-button disabled @click="checkout" variant="success">Checkout</b-button>
      <b-button disabled variant="danger" @click="clearCart">Empty Cart</b-button>
    </template>
    <template v-else>
      <b-button @click="checkout" variant="success">Checkout</b-button>
      <b-button variant="danger" @click="clearCart">Empty Cart</b-button>
    </template>
    <p>Total: ${{total}}</p>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { button } from "bootstrap-vue/es/components";
export default {
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotal"
    }),
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    })
  },
  methods: {
    ...mapActions(["checkout", "clearCart", "removeItem"])
  }
};
</script>

<style>
</style>