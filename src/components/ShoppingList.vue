<template>
  <div>
    <h1>Product List</h1>
    <h1 v-if="loading">THE PRODUCTS ARE LOADING</h1>
    <ul v-else, style="list-style-type:none">
      <b-row class="justify-content-md-center">
        <li v-for="product in products" :key="product.id">
          <b-card style="max-width: 200px">
            {{product.title}}
            <br>
            {{`Price: $${product.price}`}}
            <br>
            {{`Quantity: ${product.inventory}`}}
            <b-button
              :disabled="!productIsInStock(product)"
              v-if="!productIsInStock(product)"
            >Out of Stock</b-button>
            <b-button v-else @click="addToCart(product)" variant="primary" size="large">Add to Cart</b-button>
          </b-card>
        </li>
      </b-row>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { button } from "bootstrap-vue/es/components";
import { Card } from "bootstrap-vue/es/components";

export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      products: state => state.products.items
    }),
    ...mapGetters({
      productIsInStock: "productIsInStock"
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
      addToCart: "addToCart"
    })
  },
  created() {
    this.loading = true;
    this.fetchProducts().then(() => (this.loading = false));
  }
};
</script>

<style>
</style>