<template>

   <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Inventory</h3>

        </div>
        <div class="card-body">
                 <form action="" method="post" @submit.prevent="save">


                    <div class="form-group row">

                        <div class="col-lg-12">
                             <label class="col-form-label col-lg-4">Product name</label>
                                <div class="input-group input-group-lg">
                                <vue-select v-model="product_id" label="product_name" class="form-control" :options="getProducts" :reduce="product => product.id" @keypress="errors.clear('product_id')"/>

                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('product_id')"></span>

                        </div>


                    </div>
                     <div class="form-group row">
                         <div class="col-lg-6">
                             <label class="col-form-label col-lg-4">Gas Type</label>
                             <div class="input-group input-group-lg">
                                 <select v-model="gas_type" class="form-control">
                                     <option value="">Select Gas type</option>
                                     <option value="o">Outright</option>
                                     <option value="e">Empty</option>
                                 </select>
                             </div>
                             <span class="help is-danger" style="color:red;" v-text="errors.get('gas_type')"></span>

                         </div>
                     </div>

                     <div class="form-group row">
                         <div class="col-lg-6">
                             <label class="col-form-label col-lg-4">Stock Type</label>
                             <div class="input-group input-group-lg">
                                 <select v-model="stock_type" class="form-control">
                                     <option value="">Select Stock type</option>
                                     <option value="in">Stock In</option>
                                     <option value="out">Stock Out</option>
                                 </select>
                             </div>
                             <span class="help is-danger" style="color:red;" v-text="errors.get('stock_type')"></span>

                         </div>
                     </div>
                    <div class="form-group row">

                        <div v-if="stock_type === 'in'" class="col-lg-6">
                            <label class="col-form-label col-lg-4">Quantity</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model.number="stock_in" placeholder="Stock in" aria-describedby="sizing-addon1" @keydown="errors.clear('stock_in')" >
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('stock_in')"></span>

                        </div>

                        <div v-if="stock_type === 'out'" class="col-lg-6">
                            <label class="col-form-label col-lg-4">Quantity</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model.number="stock_out" placeholder="Stock out" aria-describedby="sizing-addon1" @keydown="errors.clear('stock_out')" >
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('stock_out')"></span>

                        </div>


                    </div>
                     <div class="col-lg-6">
                         <label class="col-form-label col-lg-4">Branch name</label>
                         <div class="input-group input-group-lg">
                             <vue-select v-model="branch_id" label="branch_name" class="form-control" :options="getBranches" :reduce="branch => branch.id" @keypress="errors.clear('branch_id')"/>

                         </div>
                         <span class="help is-danger" style="color:red;" v-text="errors.get('branch_id')"></span>

                     </div>

                     <div class="form-group row">
                         <label class="col-form-label col-lg-4">Remarks</label>
                         <div class="input-group input-group-lg">
                             <textarea v-model="remarks" class="form-control" cols="5"></textarea>
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


            product_id: '',
            branch_id:'',
            gas_type:'',
            stock_type: '',
            stock_out:'',
            stock_in:'',
            remarks:'',
            errors: new Errors(),
            alert: new SweetAlert(),
        }
    },
        mounted() {
            this.$store.dispatch("fetchProduct")
            this.$store.dispatch("fetchBranch")
        },
      computed: {
        getProducts() {
            return this.$store.getters.getProducts
        },
         getBranches() {
            return this.$store.getters.getBranches
        },

    },

    methods:{
        save(){
            axios.post('/transfer',this.$data).
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

    },

}
</script>

<style>

</style>
