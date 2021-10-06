<template>

   <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Inventory</h3>

        </div>
        <div class="card-body">
                 <form action="" method="post" @submit.prevent="save">

                    <div class="form-group row">

                        <div class="col-lg-6">
                             <label class="col-form-label col-lg-4">Brand name</label>
                                <div class="input-group input-group-lg">
                                <v-select v-model="brand_id" label="brand_name" class="form-control" :options="getBrands" :reduce="brand => brand.id" @keypress="errors.clear('brand_id')"/>

                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('brand_id')"></span>

                        </div>

                        <div class="col-lg-6">
                             <label class="col-form-label col-lg-4">Branch name</label>
                            <div class="input-group input-group-lg">
                             <v-select v-model="branch_id" label="branch_name" class="form-control" :options="getBranches" :reduce="branch => branch.id" @keypress="errors.clear('branch_id')"/>

                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('branch_id')"></span>
                        </div>
                    </div>

                    <div class="form-group row">

                        <div class="col-lg-6">
                            <label class="col-form-label col-lg-4">Quantity</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="quantity" aria-describedby="sizing-addon1" @keydown="errors.clear('quantity')" >
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('quantity')"></span>

                        </div>

                        <div class="col-lg-6">
                            <label class="col-form-label col-lg-4">Stock In</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="stock_in" aria-describedby="sizing-addon1" @keydown="errors.clear('stock_in')">
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('stock_in')"></span>

                        </div>
                    <div class="col-lg-6">
                            <label class="col-form-label col-lg-4">Stock Out</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="stock_out" aria-describedby="sizing-addon1" @keydown="errors.clear('stock_out')">
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('stock_out')"></span>

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


            brand_id: '',
            branch_id:'',
            stock_in: '',
            quantity: '',
            stock_out: '',
            edit: false,
            errors: new Errors(),
            alert: new SweetAlert(),
        }
    },
        mounted() {
            this.$store.dispatch("fetchBrand")
            this.$store.dispatch("fetchBranch")
        },
      computed: {
        getBrands() {
            return this.$store.getters.getBrands
        },
         getBranches() {
            return this.$store.getters.getBranches
        },

    },

    methods:{
        save(){
        if(this.edit === false){
            axios.post('/inventory',this.$data).
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
