<template>
    <div>

        <div class="row my-4">
            <div class="col-md-12">
                <div class="card">

                    <div class="card-body">
                        <form>

                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="">Start Date</label>

                                        <!-- <v2-datepicker v-model="startDate" lang="en" format="MM/DD/YYYY"></v2-datepicker> -->
                                        <datepicker wrapper-class="inline" placeholder="From date" class="form-control" format="dd/MM/yyyy" :clear-button="true" v-model='fromdate' @closed='checkDate();'></datepicker>

                                    </div>

                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="">End Date</label>

                                        <!-- <v2-datepicker v-model="endDate" lang="en" format="MM/DD/YYYY"></v2-datepicker> -->

                                        <datepicker wrapper-class="inline" placeholder="To date" class="form-control" format="dd/MM/yyyy" :clear-button="true" v-model='todate' @closed='checkDate();'></datepicker>

                                    </div>

                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type='button' class="btn btn-primary btn-sm" @click='fetchRecords()' value='Search'>

                                    </div>
                                </div>
                                <!-- <div class="col-md-2 mt-4">
                      <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Search">
                      </div>
                    </div> -->

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
<!--        <div class="row my-4">-->
<!--            <div class="col-md-6 float-right">-->
<!--                <label for="">Search</label>-->
<!--                <input type="text" class="form-control" placeholder="Search reciept code" v-model="search" value="">-->

<!--            </div>-->
<!--        </div>-->
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
                <tr v-for="(reciept, index) in posts" :key="reciept.id">

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

                </tbody>
            </table>


        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import InfiniteLoading from "vue-infinite-loading";
export default {
    components: {
        Datepicker,
    },
    data() {
        return {
            posts: [],
            fromdate: '',
            todate: '',
            search:'',
            recordNotFound: true

        }
    },


    computed: {
        // reportTotal: function() {
        //     var total = 0;
        //     this.posts.forEach(function(item) {
        //       total += parseInt(item.grand_total);
        //
        //     });
        //   //  this.form.total = total;
        //     return total;
        //
        // },
        // reportQuantity: function(){
        //   var quantity = 0;
        //   this.posts.forEach(function(item) {
        //     quantity += parseInt(item.total_quantity);
        //   });
        //   //this.form.quantity = quantity;
        //   return quantity;
        // },
        // filteredData: function(){ // filter search
        //     var search = this.search;
        //
        //     return this.posts.filter(customer => {
        //         return reciept_code.toLowerCase().includes(search.toLowerCase())
        //     })
        //
        // },


    },
    methods: {
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
        checkDate: function() {
            if (this.fromdate != '') {
                var fromdate = new Date(this.fromdate)
                var todate = new Date(this.todate)

                if (fromdate.getTime() > todate.getTime()) {
                    var currentDate = new Date();
                    var day = fromdate.getDate();
                    var month = fromdate.getMonth();
                    var year = fromdate.getFullYear();

                    this.todate = new Date(year, month, day)
                }
            }
        },
        fetchRecords: function() {

            axios.get('/sales/report', {
                params: {
                    fromdate: this.fromdate,
                    todate: this.todate
                }
            }).then((response) => {
                this.posts = response.data.sales;
                if(this.posts.length === 0){
                    this.recordNotFound = true;
                }else{
                    this.recordNotFound= false;
                }
            }).catch((error) => {
                console.log(error);
            })
        },

    }
}
</script>

<style lang="css" scoped>
</style>
