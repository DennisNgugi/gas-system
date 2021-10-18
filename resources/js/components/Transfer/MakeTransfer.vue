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
                             <label class="col-form-label col-lg-4">From Branch</label>
                             <div class="input-group input-group-lg">
                                 <vue-select v-model="from_branch_id" label="branch_name" class="form-control" :options="getBranches" :reduce="branch => branch.id" @keypress="errors.clear('from_branch_id')"/>

                             </div>
                             <span class="help is-danger" style="color:red;" v-text="errors.get('from_branch_id')"></span>
                         </div>

                         <div class="col-lg-6">
                             <label class="col-form-label col-lg-4">To Branch</label>
                             <div class="input-group input-group-lg">
                                 <vue-select v-model="to_branch_id" label="branch_name" class="form-control" :options="getBranches" :reduce="branch => branch.id" @keypress="errors.clear('to_branch_id')"/>

                             </div>
                             <span class="help is-danger" style="color:red;" v-text="errors.get('to_branch_id')"></span>
                         </div>
                     </div>

                    <div class="form-group row">

                        <div class="col-lg-6">
                             <label class="col-form-label col-lg-4">Product name</label>
                                <div class="input-group input-group-lg">
                                <vue-select v-model="product_id" label="product_name" class="form-control" :options="getProducts" :reduce="product => product.id" @keypress="errors.clear('product_id')"/>

                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('product_id')"></span>

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
            from_branch_id:'',
            to_branch_id:'',
            quantity: '',
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
