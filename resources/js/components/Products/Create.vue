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
                                    <input type="text" class="form-control" v-model="product_name" aria-describedby="sizing-addon1" @keydown="errors.clear('product_name')" >

                                </div>

                                <span class="help is-danger" style="color:red;" v-text="errors.get('product_name')"></span>
                            </div>
                        </div>

                        <div class="col-lg-4">
                             <label class="col-form-label col-lg-4">Category name</label>
                                <div class="input-group input-group-lg">
                                <vue-select v-model="brand_id" label="brand_name" class="form-control" :options="getBrands" :reduce="brand => brand.id" @keypress="errors.clear('brand_id')"/>

                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('brand_id')"></span>

                        </div>

                        <div class="col-lg-4">
                             <label class="col-form-label col-lg-4">Unit size</label>
                            <div class="input-group input-group-lg">
                                    <select v-model="unit" class="form-control" @keypress="errors.clear('unit')">
                                    <option value="">Select Unit size</option>
                                    <option value="kg">Kilogrammes</option>
                                    <option value="g">Grammes</option>
                                    <option value="m">Metres</option>
                                    <option value="s">Single</option>

                                </select>
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('unit')"></span>
                        </div>
                    </div>
                     <hr>
                    <div class="form-group row">


                            <label class="col-form-label col-lg-4">Complete</label>
                            <div class="input-group input-group-lg">
                                <div class="col-md-4">
                                    <label class="col-form-label col-lg-4">Retail Price</label>
                                </div>
                                <div class="col-md-5">
                                <input type="text" class="form-control" v-model.number="price.complete.retail_price" aria-describedby="sizing-addon1" @keydown="errors.clear('price.complete.retail_price')" >
                            </div>
                            </div>
                        <div class="input-group input-group-lg mt-2">
                            <div class="col-md-4">
                                <label class="col-form-label col-lg-4">Wholesale Price</label>
                            </div>
                            <div class="col-md-5">
                                <input type="text" class="form-control" v-model.number="price.complete.wholesale_price" aria-describedby="sizing-addon1" @keydown="errors.clear('price.complete.wholesale_price')" >
                            </div>
                        </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('price.complete.wholesale_price')"></span>
                    </div>
                     <hr>

                     <div v-if="brand_id === 1" class="form-group row">


                         <label class="col-form-label col-lg-4">Refill</label>

                         <div  class="input-group input-group-lg">
                             <div class="col-md-4">
                                 <label class="col-form-label col-lg-4">Retail Price</label>
                             </div>
                             <div class="col-md-5">
                                 <input type="text" class="form-control" v-model.number="price.refill.retail_price" aria-describedby="sizing-addon1" @keydown="errors.clear('price.refill.retail_price')" >
                             </div>
                         </div>
                         <div class="input-group input-group-lg mt-2">
                             <div class="col-md-4">
                                 <label class="col-form-label col-lg-4">Wholesale Price</label>
                             </div>
                             <div class="col-md-5">
                                 <input type="text" class="form-control" v-model.number="price.refill.wholesale_price" aria-describedby="sizing-addon1" @keydown="errors.clear('price.refill.wholesale_price')" >
                             </div>
                         </div>
                         <span class="help is-danger" style="color:red;" v-text="errors.get('price.refill.wholesale_price')"></span>
                     </div>

                     <div class="form-group row">


                         <label class="col-form-label col-lg-4">Quantity</label>


                         <div v-if="brand_id === 1" class="input-group input-group-lg mt-2">
                             <div class="col-md-4">
                                 <label class="col-form-label col-lg-4">Outlight</label>
                             </div>
                             <div class="col-md-5">
                                 <input type="text" class="form-control" v-model.number="quantity.outlight" aria-describedby="sizing-addon1" @keydown="errors.clear('quantity.outlight')" >
                             </div>
                             <span class="help is-danger" style="color:red;" v-text="errors.get('quantity.outlight')"></span>
                         </div>

                         <div v-if="brand_id === 1" class="input-group input-group-lg mt-2">
                             <div class="col-md-4">
                                 <label class="col-form-label col-lg-4">Empty</label>
                             </div>
                             <div class="col-md-5">
                                 <input type="text" class="form-control" v-model.number="quantity.empty" aria-describedby="sizing-addon1" @keydown="errors.clear('quantity.empty')" >
                             </div>
                             <span class="help is-danger" style="color:red;" v-text="errors.get('quantity.empty')"></span>
                         </div>


                         <div v-if="brand_id === 2" class="input-group input-group-lg mt-2">
                             <div class="col-md-4">
                                 <label class="col-form-label col-lg-4">Qty</label>
                             </div>
                             <div class="col-md-5">
                                 <input type="text" class="form-control" v-model.number="quantity.others" aria-describedby="sizing-addon1" @keydown="errors.clear('quantity.others')" >
                             </div>
                             <span class="help is-danger" style="color:red;" v-text="errors.get('quantity.others')"></span>
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

            product_name:'',
            brand_id: '',
            unit: '',
            price:{
              complete:{
                  retail_price:'',
                  wholesale_price: ''
              },
               refill:{
                  retail_price: '',
                   wholesale_price: ''
               }
            },
            quantity:{
                outlight:'',
                empty:'',
                others:''
            },
            edit: false,
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

    methods:{
        save(){
        if(this.edit === false){
            axios.post('/product',this.$data).
                then((response) => {
                    // display success message from backend

                   this.alert.successLarge(response.data.success)
                    // empty the data object
                    Object.assign(this.$data, this.$options.data())
                }).catch((error) => {

                     this.errors.record(error.response.data.errors)
                }
                    )
        }
        }

    },

}
</script>

<style>

</style>
