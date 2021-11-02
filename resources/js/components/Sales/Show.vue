<template>
    <div>
<div class="row">
    <div class="col-md-12">
    <div class="card">
        <div class="card-header">
            <h3>Reciept detail</h3>
        </div>
        <div class="card-body">
            <table class="table table-responsive-md table-bordered">
                <tr>
                    <th>Reciept code:</th>
                    <td>{{reciept.reciept_code}}</td>
                    <th>Total amount:</th>
                    <td>{{reciept.total_amount}}</td>

                </tr>
                <tr>
                    <th>Amount paid:</th>
                    <td>{{reciept.amount_paid}}</td>
                    <th>Balance:</th>
                    <td>{{reciept.balance}}</td>
                </tr>

                <tr>
                    <th>Contact:</th>
                    <td>{{reciept.phone_number}}</td>
                    <th>Message Time:</th>
                    <td>{{reciept.message_time}}</td>
                </tr>

                <tr>
                    <th>Payment status:</th>
                    <td v-text="status(reciept.payment_status)"></td>
                    <th>Paid via:</th>
                    <td v-text="paymentMode(reciept.payment_mode)"></td>
                </tr>
                <tr>
                    <th>Remarks:</th>
                    <td>{{reciept.remarks}}</td>

                </tr>

            </table>
        </div>
    </div>
    </div>
</div>

    <div class="row mt-2">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3>Items detail</h3>
                </div>
                <div class="card-body">
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
                            <tr v-for="(checkout, index) in reciept.sales" :key="checkout.id">

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
    </div>
    </div>
</template>

<script>
export default {
    name: "Show.vue",
    data(){
        return{
            reciept:[],
        }
    },
    mounted() {
        this.getProductDetail()
    },

    methods:{
        status(status){
         if(status === 1){
             return 'Completed'
         }   else {
             return 'Pending'
         }
        },
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
        getProductDetail(){
            axios.get(`/reciept/view/${this.$route.params.id}`).then( response => {
                this.reciept = response.data.recieptDetail
            })
        }
    }
}
</script>

<style scoped>

</style>
