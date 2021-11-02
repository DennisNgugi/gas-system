<template>

    <!-- Default box -->
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Product</h3>

        </div>
        <div class="card-body">
            <form action="" method="post" @submit.prevent="save">

                <div class="form-group row">
                    <div class="col-lg-4">
                        <div class="form-group row">


                            <label class="col-form-label col-lg-4">Product name</label>

                            <div class="input-group input-group-lg">
                                <input type="text" class="form-control" v-model="product.product_name" aria-describedby="sizing-addon1" @keydown="errors.clear('product.product_name')" >

                            </div>

                            <span class="help is-danger" style="color:red;" v-text="errors.get('product.product_name')"></span>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <label class="col-form-label col-lg-4">Category name</label>
                        <div class="input-group input-group-lg">
                            <vue-select v-model="product.brand_id" label="brand_name" class="form-control" :options="getBrands" :reduce="brand => brand.id" @keypress="errors.clear('product.brand_id')"/>

                        </div>
                        <span class="help is-danger" style="color:red;" v-text="errors.get('product.brand_id')"></span>

                    </div>

                    <div class="col-lg-4">
                        <label class="col-form-label col-lg-4">Unit size</label>
                        <div class="input-group input-group-lg">
                            <select v-model="product.unit" class="form-control" @keypress="errors.clear('product.unit')">
                                <option value="">Select Unit size</option>
                                <option value="kg">Kilogrammes</option>
                                <option value="g">Grammes</option>
                                <option value="m">Metres</option>
                                <option value="s">Single</option>

                            </select>
                        </div>
                        <span class="help is-danger" style="color:red;" v-text="errors.get('product.unit')"></span>
                    </div>
                </div>
                <hr>
                <div class="form-group row">


                    <label class="col-form-label col-lg-4">Complete Gas</label>
                    <div class="input-group input-group-lg">
                        <div class="col-md-4">
                            <label class="col-form-label col-lg-4">Retail Price</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" v-model.number="product.price.complete.retail_price" aria-describedby="sizing-addon1" @keydown="errors.clear('product.price.complete.retail_price')" >
                        </div>
                    </div>
                    <div class="input-group input-group-lg mt-2">
                        <div class="col-md-4">
                            <label class="col-form-label col-lg-4">Wholesale Price</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" v-model.number="product.price.complete.wholesale_price" aria-describedby="sizing-addon1" @keydown="errors.clear('product.price.complete.wholesale_price')" >
                        </div>
                    </div>
                    <span class="help is-danger" style="color:red;" v-text="errors.get('product.price.complete.wholesale_price')"></span>
                </div>
                <hr>

                <div class="form-group row">


                    <label class="col-form-label col-lg-4">Refill Gas</label>

                    <div class="input-group input-group-lg">
                        <div class="col-md-4">
                            <label class="col-form-label col-lg-4">Retail Price</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" v-model.number="product.price.refill.retail_price" aria-describedby="sizing-addon1" @keydown="errors.clear('price.refill.retail_price')" >
                        </div>
                    </div>
                    <div class="input-group input-group-lg mt-2">
                        <div class="col-md-4">
                            <label class="col-form-label col-lg-4">Wholesale Price</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" v-model.number="product.price.refill.wholesale_price" aria-describedby="sizing-addon1" @keydown="errors.clear('product.price.refill.wholesale_price')" >
                        </div>
                    </div>
                    <span class="help is-danger" style="color:red;" v-text="errors.get('product.price.refill.wholesale_price')"></span>
                </div>

                <div class="form-group row">


                    <label class="col-form-label col-lg-4">Quantity</label>

                    <div class="input-group input-group-lg mt-2">
                        <div class="col-md-4">
                            <label class="col-form-label col-lg-4">Outright</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" v-model.number="product.quantity.outlight" aria-describedby="sizing-addon1" @keydown="errors.clear('product.quantity.outlight')" >
                        </div>
                        <span class="help is-danger" style="color:red;" v-text="errors.get('product.quantity.outlight')"></span>
                    </div>

                    <div class="input-group input-group-lg mt-2">
                        <div class="col-md-4">
                            <label class="col-form-label col-lg-4">Empty</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" v-model.number="product.quantity.empty" aria-describedby="sizing-addon1" @keydown="errors.clear('product.quantity.empty')" >
                        </div>
                        <span class="help is-danger" style="color:red;" v-text="errors.get('product.quantity.empty')"></span>
                    </div>

                    <div class="input-group input-group-lg mt-2">
                        <div class="col-md-4">
                            <label class="col-form-label col-lg-4">Qty</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" v-model.number="product.quantity.normal" aria-describedby="sizing-addon1" @keydown="errors.clear('product.quantity.normal')" >
                        </div>
                        <span class="help is-danger" style="color:red;" v-text="errors.get('product.quantity.normal')"></span>
                    </div>


                </div>


                <button class="btn btn-primary" type="submit">Save</button>


            </form>
        </div>
        <!-- /.card-body -->
    </div>

    <!-- /.card -->
</template>

<script>
import Errors from '../../errors/errors'
import SweetAlert from '../../alerts/alert'
export default {

    data() {
        return {

            product:{},
            errors: new Errors(),
            alert: new SweetAlert(),
        }
    },
    mounted() {
        this.$store.dispatch("fetchBrand")
    },
    computed: {
        getBrands() {
            return this.$store.getters.getBrands
        }
    },
    created() {
        let url = `/product/edit/${this.$route.params.id}`
        axios.get(url).then((response) => {
            //  console.log(response.data);
            this.product = response.data.product;
        });
    },
    methods:{
        save(){

                axios.post(`/product/update/${this.$route.params.id}`,this.product).
                then((response) => {
                    // display success message from backend
                    this.alert.successLarge(response.data.success)
                    this.$router.push({
                        name: 'products.index'
                    })
                }).catch((error) => {
                        this.errors.record(error.response.data.errors)
                    }
                )

        },


    },

}
</script>

<style>

</style>
