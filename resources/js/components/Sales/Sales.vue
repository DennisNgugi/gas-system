<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Search</span>
                    </div>
                    <input type="text" v-model="search"  class="form-control" autofocus placeholder="Search here ....."  aria-describedby="basic-addon1">
                </div>
                <div class="card-header">
                    <h4 class="card-title">Reciepts</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-nowrap mb-0">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Reciept code</th>
                                <th>Customer name</th>
                                <th>Total quantity</th>
                                <th>Total amount</th>
                                <th>Amount recieved</th>
                                <th>Balance</th>
                                <th>Payment mode</th>
                                <th>Served by</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(reciept, index) in filteredData" :key="reciept.id">

                                <td>{{index + 1}}</td>
                                <td>{{reciept.reciept_code}}</td>
                                <td v-if="reciept.customers != null">{{reciept.customers.customer_name}}</td>
                                <td v-else>Walk in</td>
                                <td>{{reciept.total_quantity}}</td>
                                <td>{{reciept.total_amount| formatNumber}}</td>
                                <td>{{reciept.amount_paid | formatNumber}}</td>
                                <td>{{reciept.balance | formatNumber}}</td>
                                <td>{{reciept.users.name}}</td>
                                <td>{{reciept.created_at}}</td>

                                <td>
                                    <button class="btn btn-info btn-sm" @click.prevent="recieptDetail(reciept.sales)">View</button>
                                    <router-link class="btn btn-primary btn-sm">Edit</router-link>
                                    <button class="btn btn-danger btn-sm" @click.prevent="disable(reciept.id)">Delete</button>

                                </td>


                            </tr>
                            <infinite-loading @distance="1" spinner="bubbles" @infinite="infiniteHandler">
                                <div class="text-red" slot="no-more">No more reciepts</div>
                                <div class="text-red" slot="no-results">No more reciepts</div>
                            </infinite-loading>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


            <!-- Modal Display of Reciept Details -->
            <div v-if="showModal">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="checkoutModalLongTitle">Sales</h5>
                                        <button type="button" class="close" @click="closeModal()">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body overflow-auto" style="max-height:400px;">
                                        <div class="container-fluid">
                                            <div class="col-md-12">

                                                <div class="table-responsive">
                                                    <table class="table table-nowrap mb-0">
                                                        <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Product name</th>
                                                            <th>Gas Type</th>
                                                            <th>Sale Type</th>
                                                            <th>Quantity</th>
                                                            <th>Price</th>
                                                            <th>Total</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="(checkout, index) in sales" :key="checkout.id">

                                                            <td>{{index + 1}}</td>
                                                            <td>{{checkout.products.product_name}}</td>
                                                            <td>{{checkout.gas_type}}</td>
                                                            <td>{{checkout.sale_type}}</td>
                                                            <td>{{checkout.quantity}}</td>
                                                            <td>{{checkout.price | formatNumber}}</td>
                                                            <td>{{checkout.total | formatNumber}}</td>

                                                        </tr>
                                                        </tbody>
                                                    </table>


                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" @click="closeModal()">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <!-- Modal Display of Reciept Details -->
        </div>
    </div>
</template>
<script>

import InfiniteLoading from 'vue-infinite-loading';
export default {
    data() {
        return {
            search: '',
            edit: true,
            showModal: false,
            sales: [],
            reciepts:[],
            page:1,
            bottom:false,
        }
    },
    mounted() {
        //  this.$store.dispatch("fetchReciept")
    },

    computed: {

        filteredData() {
            return this.reciepts.filter(item =>
                item.reciept_code.toLowerCase().includes(
                    this.search.toLowerCase()
                ) ||
                item.created_at.toLowerCase().includes(
                    this.search.toLowerCase()
                )
            )
        },

    },
    methods:{
        infiniteHandler($state){
            setTimeout(function (){


                axios.get('/reciept?page='+this.page).then((response)=>{
                    if(response.data.reciepts.data.length > 0){
                        // let lastPage = response.data.reciepts.last_page
                        response.data.reciepts.data.forEach(reciept => {
                            this.reciepts.push(reciept);
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
                    let uri = `/reciept/${id}`;
                    axios.post(uri).then(response => {
                        this.$store.state.reciepts.splice(this.$store.state.reciepts.indexOf(id), 1);
                        window.location.reload(false);
                        //this.fetchData();
                    });
                    swal.fire(
                        'Deleted!',
                        'Reciept has been deleted.',
                        'success'
                    )
                }
            }).
            catch(()=>{
                swal("Failed","There was something wrong","warning");
            })


        },
        // populate the modal with checkout detail
        recieptDetail(detail) {

            this.showModal = true
            this.sales = detail
        },
        closeModal() {
            this.showModal = false
            // empty the modal
            this.sales.splice(0)
        },
    },

    // created() {
    //     EventBus.$on('search', (value) => {
    //         this.search = value
    //     })
    // },
    components: {
        InfiniteLoading,
    },

}
</script>


<style lang="css" scoped>

.modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}
.modal-header {
    background-color: #141820;
}
.modal-title {
    color: #fff;
}
.close {
    color: #fff;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-body {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}
#card-details {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}
#product-details {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}

</style>
