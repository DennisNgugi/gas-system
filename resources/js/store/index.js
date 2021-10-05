import axios from "axios"

export default {
    state:{
        products: [],
        cart: [],
        reciepts: [],
        brands: [],
    },

    getters:{
        getProducts(state) {
            return state.products
        },
        getBrands(state) {
            return state.brands
        },
    },
    mutations:{
        updateProducts(state, data) {
            return state.products = data
        },
        updateBrands(state, data) {
            return state.brands = data
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
    }
    
}