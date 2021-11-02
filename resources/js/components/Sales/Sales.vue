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
                    <h4 class="card-title">Reciepts</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive-md table-bordered">
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
                                <td v-text="paymentMode(reciept.payment_mode)">

                                </td>
                                <td>{{reciept.users.name}}</td>
                                <td>{{reciept.created_at}}</td>

                                <td>
                                    <router-link :to="{name: 'reciepts.view', params: { id: reciept.id }}"  class="btn btn-info btn-sm">View</router-link>
                                    <input type="submit" @click.prevent="disable(reciept.id)" class="btn btn-danger btn-sm" value="Delete">

                                </td>


                            </tr>
                            <infinite-loading @distance="1" spinner="spiral" @infinite="infiniteHandler">
                                <div class="text-red" slot="no-more">No more reciepts</div>
                                <div class="text-red" slot="no-results">No more reciepts</div>
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
import SweetAlert from '../../alerts/alert'

export default {
    data() {
        return {
            search: '',
            edit: true,
            reciepts:[],
            page:1,
            bottom:false,
            alert: new SweetAlert(),
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
        paymentMode(payment){
            let payment_mode = ''
            switch (true) {
                case (payment === '0'):
                    payment_mode = 'CASH'
                    break;
                case (payment === '1'):
                    payment_mode = 'M-PESA PAYBILL'
                    break;
                case (payment === '2'):
                    payment_mode = 'M-PESA TILLNO'
                    break;
                case (payment === '3'):
                    payment_mode = 'CASH + M-PESA TILLNO'
                    break;
                case (payment === '4'):
                    payment_mode = 'CASH + M-PESA PAYBILL'
                    break;
                case (payment === '5'):
                    payment_mode = 'EQUITY PAYBILL'
                    break;
                case (payment === '6'):
                    payment_mode = 'CASH + EQUITY PAYBILL'
                    break;
                default:
                    payment_mode = "Invalid";
            }
            return payment_mode
        },
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
                    axios.delete(uri).then(response => {
                        this.reciepts.splice(this.reciepts.indexOf(id), 1);
                        this.alert.successLarge(response.data.success)
                        window.location.reload(false);
                        //this.fetchData();
                    });

                }
            }).
            catch(()=>{
                this.alert.error(response.data.error)
            })


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
