<template>
  <div>
    <h1>Product List</h1>
    <h1 v-if="loading">THE PRODUCTS ARE LOADING</h1>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{`$ ${product.price}`}} - {{product.inventory}}
        <button 
        :disabled="!productIsInStock(product)"
        @click="addToCart(product)"
        >Add to Cart</button>
      </li>
    </ul> 
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
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
       productIsInStock: 'productIsInStock'
   }),
  },
  methods: {
      ...mapActions({
          fetchProducts: 'fetchProducts',
          addToCart: 'addToCart'
      })
  },
  created() {
    this.loading = true;
    this.fetchProducts()
        .then(() => (this.loading = false));
  }
};
</script>

<style>
</style>