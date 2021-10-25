
<template>
    <div class="row">
        <div class="col-md-12">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Search</span>
                </div>
                <input type="text" v-model="search"  class="form-control" autofocus placeholder="Search here ....."  aria-describedby="basic-addon1">
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Products</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-nowrap mb-0">
                            <thead>
                            <tr>
                                <th width="5%">#</th>
                                <th>Customer Name</th>
                                <th>Phone number</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(customer, index) in filteredData" :key="customer.id">
                                <td>{{index + 1}}</td>

                                <td>{{customer.customer_name}}</td>
                                <td>{{customer.phone_number}}</td>
                                <td>{{customer.location}}</td>

                                <td>
                                    <router-link :to="{name: 'customers.edit', params: { id: customer.id }}"  class="btn btn-primary btn-sm">Edit</router-link>
                                    <router-link :to="{name: 'customers.view', params: { id: customer.id }}"  class="btn btn-info btn-sm">View</router-link>
                                    <input type="submit" @click.prevent="disable(customer.id)" class="btn btn-danger btn-sm" value="Delete">
                                </td>

                            </tr>
                            <infinite-loading @distance="1" spinner="spiral" @infinite="infiniteHandler">
                                <div class="text-red" slot="no-more">No more customers</div>
                            </infinite-loading>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import SweetAlert from "../../alerts/alert";
export default {
    data(){
        return{
            search: '',
            customers:[],
            page:1,
            bottom:false,
            alert: new SweetAlert(),
        }
    },
    mounted() {
        //this.$store.dispatch("fetchProduct")
    },
    methods:{
        infiniteHandler($state){
            setTimeout(function (){


                axios.get('/customer?page='+this.page).then((response)=>{
                    if(response.data.customers.data.length > 0){
                        // let lastPage = response.data.reciepts.last_page
                        response.data.customers.data.forEach(customer => {
                            this.customers.push(customer);
                        });
                        $state.loaded();
                        this.page +=1;

                    }

                }).catch(e => console.log(e));

            }.bind(this),1000);
        },
        disable(id) {
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {

                if (result.value) {
                    let uri = `/customer/${id}`;
                    axios.delete(uri).then(response => {
                        this.customers.splice(this.customers.indexOf(id), 1);

                        window.location.reload(false);

                        this.alert.successLarge(response.data.success)
                        // this.fetchData();
                    });

                }
            }).
            catch(()=>{
                this.alert.error(response.data.error)
            })


        }
    },

    computed: {
        filteredData() {
            return this.customers.filter(item =>
                item.customer_name.toLowerCase().includes(
                    this.search.toLowerCase()
                ) ||
                item.created_at.toLowerCase().includes(
                    this.search.toLowerCase()
                )
            )
        },
    },
    components: {
        InfiniteLoading,
    },

}
</script>


