<template>

   <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Product</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
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
                             <label class="col-form-label col-lg-4">Unit size</label>
                            <div class="input-group input-group-lg">
                                    <select v-model="unit" class="form-control" @keypress="errors.clear('unit')">
                                    <option value="">Select Unit size</option>
                                    <option value="3">3 Kg</option>
                                    <option value="6">6 Kg</option>
                                    <option value="13">13 Kg</option>
                                    <option value="50">50 Kg</option>
                                    <option value="0">N/A</option>

                                </select>
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('unit')"></span>
                        </div>
                    </div>
                  
                    <div class="form-group row">
                        
                        <div class="col-lg-6">
                            <label class="col-form-label col-lg-4">Retail Price</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="retail_price" aria-describedby="sizing-addon1" @keydown="errors.clear('retail_price')" >
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('retail_price')"></span>

                        </div>
                            
                        <div class="col-lg-6">
                            <label class="col-form-label col-lg-4">WholeSale Price</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="wholesale_price" aria-describedby="sizing-addon1" @keydown="errors.clear('wholesale_price')">
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('wholesale_price')"></span>

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
            retail_price: '',
            wholesale_price: '',
            unit: '',
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