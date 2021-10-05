<template>

   <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Brand Name</h3>

        </div>
        <div class="card-body">
                 <form action="" method="post" @submit.prevent="save">
               
                    <div class="form-group row">
                       
                        <div class="col-lg-12">
                             <label class="col-form-label col-lg-4">Brand Name</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="brand_name" aria-describedby="sizing-addon1" @keydown="errors.clear('brand_name')">
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('brand_name')"></span>

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

			
            brand_name: '',
            
            edit: false,
            errors: new Errors(),
            alert: new SweetAlert(),
        }
    },

    methods:{
        save(){
        if(this.edit === false){
            axios.post('/brand',this.$data).
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