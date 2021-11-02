<template>
<div class="row">
    <div class="col-md-12">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Search</span>
            </div>
            <input type="text" v-model="search"  class="form-control" autofocus placeholder="Search here ....."  aria-describedby="basic-addon1">
        </div>
        <!-- <SearchComponent></SearchComponent> -->
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Transfers</h4>
            </div>
            <div class="card-body">
                <div class="table-responsive">
<!--                    <table class="table table-bordered table-nowrap mb-0">-->
<!--                        <thead>-->
<!--                        <tr>-->
<!--                            <th>#</th>-->
<!--                            <th>Branch name</th>-->
<!--                            <th>Brand Name</th>-->
<!--                            <th>Brand products</th>-->

<!--                        </tr>-->
<!--                        </thead>-->
<!--                        <tr v-for="(inventory, index) in filteredData" :key="inventory.id">-->

<!--                            <td rowspan=3>{{index + 1}}</td>-->
<!--                            <td rowspan=4>{{ inventory.branch_name }}</td>-->

<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td rowspan=1>App Memory</td>-->
<!--                            <td rowspan=1>App Test</td>-->
<!--                        </tr>-->


<!--                        <tr>-->
<!--                            <td rowspan=1>SystemEnv2</td>-->
<!--                            <td rowspan=1>System Test</td>-->

<!--                        </tr>-->


<!--                    </table>-->
                    <table class="table table-responsive-md table-bordered">
                        <thead>
                        <tr>
                            <th rowspan="3" size="10%">Day</th>
<!--                            <th colspan="3">Seminar</th>-->
                        </tr>
                        <tr>
                            <th colspan="2">Quantity</th>
                            <th rowspan="2">Product name</th>
                            <th rowspan="2">Gas Type</th>
                            <th rowspan="2">Branch name</th>
                        </tr>
                        <tr>
                            <th>Stock In</th>
                            <th>Stock Out</th>
                        </tr>
                        </thead>

                        <tbody v-for="(transfer, index) in filteredData">

                        <tr>
                            <td>{{ transfer.created_at }}</td>
                            <td>{{transfer.stock_in}}</td>
                            <td>{{transfer.stock_out}}</td>
                            <td v-text="gasType(transfer.gas_type)"></td>
                            <td>{{transfer.products.product_name}}</td>
                            <td v-if="transfer.branches!= null">{{transfer.branches.branch_name}}</td>
                        </tr>
                        <infinite-loading @distance="1" spinner="spiral" @infinite="infiniteHandler">
                            <div class="text-red" slot="no-more">No more transfers</div>
                            <div class="text-red" slot="no-results">No more transfers</div>
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
// import SearchComponent from '../Search/SearchComponent.vue';
// import {
//     EventBus
// } from '../../events/event-bus';
import InfiniteLoading from "vue-infinite-loading";

export default {
    data() {
        return {
            search: '',
            transfers:[],
        }
    },

    // components: {
    //     SearchComponent
    // },
    computed: {

        filteredData() {
            return this.transfers.filter(item =>
                item.created_at.toLowerCase().includes(
                    this.search.toLowerCase()
                ) ||
                item.branches.branch_name.toLowerCase().includes(
                    this.search.toLowerCase()
                ));

        },


    },
    // created() {
    //     EventBus.$on('search', (value) => {
    //         this.search = value
    //     })
    // },
    methods: {
        gasType(type){
            if(type === 'e'){
                return 'Empty'
            }else {
                return 'Outright'
            }

        },
        infiniteHandler($state){
            setTimeout(function (){


                axios.get('/transfer?page='+this.page).then((response)=>{
                    if(response.data.transfers.data.length > 0){
                        // let lastPage = response.data.reciepts.last_page
                        response.data.transfers.data.forEach(transfer => {
                            this.transfers.push(transfer);
                        });
                        $state.loaded();
                        this.page +=1;

                    }

                }).catch(e => console.log(e));

            }.bind(this),1000);
        },

        // This event bus is created to transfer the value of edit = true to the create component
        // emitEditValue(category) {
        //     EventBus.$emit('edit', this.edit, category)
        // },
        // disable(id) {
        //     swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         type: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //     }).then((result) => {

        //             if (result.value) {
        //           let uri = `/categories/${id}`;
        //           axios.post(uri).then(response => {
        //               this.$store.state.categories.splice(this.$store.state.categories.indexOf(id), 1);
        //               window.location.reload(false);
        //               //this.fetchData();
        //           });
        //             swal.fire(
        //                 'Deleted!',
        //                 'Category has been deleted.',
        //                 'success'
        //             )
        //         }
        //     }).
        //     catch(()=>{
        //       swal("Failed","There was something wrong","warning");
        //     })


        // }
    },
    components: {
        InfiniteLoading,
    },
}
</script>
