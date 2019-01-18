<template>
  <div id="app">
    <ShoppingList/>
    <Cart/>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList'
import Cart from './components/Cart'

export default {
  name: 'app',
  components: {
    ShoppingList,
    Cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
