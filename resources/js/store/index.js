import axios from "axios"

export default {
    state:{
        products: [],
        cart: [],
        reciepts: [],
        brands: [],
        branches:[],
        customers:[],
        transfers:[],
    },

    getters:{
        getProducts(state) {
            return state.products
        },
        getBrands(state) {
            return state.brands
        },
        getBranches(state) {
            return state.branches
        },
        getCustomers(state) {
            return state.customers
        },
        getTransfers(state) {
            return state.transfers
        },
    },
    mutations:{
        updateProducts(state, data) {
            return state.products = data
        },
        updateBrands(state, data) {
            return state.brands = data
        },
        updateBranches(state, data) {
            return state.branches = data
        },
        updateCustomers(state, data) {
            return state.customers = data
        },
        updateTransfer(state, data) {
            return state.transfers = data
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        updateCart(state, cart) {
            state.cart = cart;
        },
    },
    actions:{
        fetchProduct(context) {
            axios.get('/product').then((response) => {

                context.commit("updateProducts", response.data.products)
            }).catch((error) => {
                console.log(error)
            })
        },
        fetchBrand(context) {
            axios.get('/brand').then((response) => {

                context.commit("updateBrands", response.data.brands)
            }).catch((error) => {
                console.log(error)
            })
        },
        fetchBranch(context) {
            axios.get('/branch').then((response) => {

                context.commit("updateBranches", response.data.branches)
            }).catch((error) => {
                console.log(error)
            })
        },
        fetchCustomer(context) {
            axios.get('/customer').then((response) => {

                context.commit("updateCustomers", response.data.customers)
            }).catch((error) => {
                console.log(error)
            })
        },
        fetchTransfer(context) {
            axios.get('/transfer').then((response) => {

                context.commit("updateTransfer", response.data.transfers)
            }).catch((error) => {
                console.log(error)
            })
        },
        clearCart({
                      commit
                  }) {
            commit('updateCart', []);
        },
        holdCart({
                     commit
                 }) {
            commit('holdCartItems');
        }
    }

}
