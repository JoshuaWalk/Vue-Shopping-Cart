<template>
    <div>
        <h1>Cart</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}} | ${{product.price}} | {{product.quantity}}
            </li>
        </ul>
        <p> Total: ${{total}}</p>
        <button @click="checkout"> Checkout </button>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    
    computed: {
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotal'
        }),
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        })
        
    },
    methods: {
        ...mapActions(['checkout'])
    }
}

</script>

<style>

</style>