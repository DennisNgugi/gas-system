<template>
    <p>{{product}}</p>
</template>

<script>
export default {
    name: "View.vue",
    data(){
        return{
            product:{}
        }
    },
    mounted() {
        this.getProductDetail()
    },

    methods:{
        getProductDetail(){
            axios.get(`/product/view/${this.$route.params.id}`).then( response => {
                this.product = response.data.productsDetail
            })
        }
    }
}
</script>

<style scoped>

</style>
