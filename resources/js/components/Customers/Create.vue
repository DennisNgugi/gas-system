<template>

    <!-- Default box -->
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Customer</h3>

        </div>
        <div class="card-body">
            <form action="" method="post" @submit.prevent="save">

                <div class="form-group row">

                    <div class="col-lg-12">
                        <label class="col-form-label col-lg-4">Customer name</label>
                        <div class="input-group input-group-lg">

                            <input type="text" class="form-control" v-model="customer_name" aria-describedby="sizing-addon1" @keydown="errors.clear('customer_name')">
                        </div>
                        <span class="help is-danger" style="color:red;" v-text="errors.get('customer_name')"></span>

                    </div>


                </div>
                <div class="form-group row">

                    <div class="col-lg-12">
                        <label class="col-form-label col-lg-4">Phone Number</label>
                        <div class="input-group input-group-lg">

                            <input type="text" class="form-control" v-model="phone_number" aria-describedby="sizing-addon1" @keydown="errors.clear('phone_number')" >
                        </div>
                        <span class="help is-danger" style="color:red;" v-text="errors.get('phone_number')"></span>

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


            customer_name: '',
            phone_number:'',
            location: '',
            edit: false,
            errors: new Errors(),
            alert: new SweetAlert(),
        }
    },

    methods:{
        save(){
            if(this.edit === false){
                axios.post('/customer',this.$data).
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
