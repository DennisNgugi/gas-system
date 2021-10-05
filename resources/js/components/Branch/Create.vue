<template>

   <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Branch</h3>

        </div>
        <div class="card-body">
                 <form action="" method="post" @submit.prevent="save">
               
                    <div class="form-group row">
                       
                        <div class="col-lg-12">
                             <label class="col-form-label col-lg-4">Branch name</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="branch_name" aria-describedby="sizing-addon1" @keydown="errors.clear('branch_name')">
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('branch_name')"></span>

                        </div>
                          
                
                    </div>
                  
                    <div class="form-group row">
                        
                        <div class="col-lg-12">
                            <label class="col-form-label col-lg-4">Location</label>
                            <div class="input-group input-group-lg">

                                <input type="text" class="form-control" v-model="location" aria-describedby="sizing-addon1" @keydown="errors.clear('location')" >
                            </div>
                            <span class="help is-danger" style="color:red;" v-text="errors.get('location')"></span>

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

			
            branch_name: '',
            location: '',
            edit: false,
            errors: new Errors(),
            alert: new SweetAlert(),
        }
    },

    methods:{
        save(){
        if(this.edit === false){
            axios.post('/branch',this.$data).
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