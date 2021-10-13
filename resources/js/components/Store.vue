<template>
    <div>
        <div class="container-fluid mt-4">
            <div class="d-md-flex h-md-100">
                <div class="col-md-7 p-0 h-md-100">
                    <!-- Search section -->
<!--                    <div class="row">-->
<!--                        &lt;!&ndash; <div class="col-md-8">-->
<!--                            <SearchComponent></SearchComponent>-->
<!--                        </div> &ndash;&gt;-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="input-group mb-3">-->
<!--                                <div class="input-group-prepend">-->
<!--                                    <span class="input-group-text" id="basic-addon1"><b><i>Barcode scan</i></b></span>-->
<!--                                </div>-->
<!--                                <input type="text" v-model="product_code"  class="form-control" autofocus placeholder="Barcode scan .....">-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
                    <!-- Search section -->

                    <!--                    Choose Gas Category-->
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card border-primary">
                                <div class="card-header">
                                    <h3>Gas sale</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="checkout.gas_type" value="C"  id="flexRadioDefault1">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Complete
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-md-6">

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="checkout.gas_type" value="E"  id="flexRadioDefault2" checked>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Refill
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--                    Choose Gas Category-->
                        <!--                    Choose sale type-->
                        <div class="col-sm-6">
                            <div class="card border-primary">
                                <div class="card-header">
                                    <h3>Sale Type</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="form-check">
                                                <input class="form-check-input" v-model="checkout.sale_type" value="W" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                                                <label class="form-check-label" for="flexRadioDefault3">
                                                    Wholesale
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" v-model="checkout.sale_type" value="R" name="flexRadioDefault" id="flexRadioDefault4" checked>
                                                <label class="form-check-label" for="flexRadioDefault4">
                                                    Retail
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--                    Choose sale type-->

                    <div>
                    <div class="row mt-3">

                        <div class="col-md-6">
                            <label for=""><b>Outlight cylinder</b> </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"> <b><i>Outlight cylinder</i></b></span>
                                </div>
                                <v-select v-model="checkout.product_id" label="product_name" class="form-control" :options="getProducts" :reduce="product => product.id"  @keypress="errors.clear('product_id')"/>

                            </div>


                        </div>

                        <div v-if="checkout.gas_type === 'E'" class="col-md-6">
                            <label for=""><b>Exchanged Cylinder</b> </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"> <b><i>Exchanged Cylinder</i></b></span>
                                </div>
                                <v-select v-model="checkout.product_id" label="product_name" class="form-control" :options="getProducts" :reduce="product => product.id" @keypress="errors.clear('product_id')"/>

                            </div>


                        </div>

                    </div>
                    <div class="row mt-2">
                        <div class="col-md-2">
                        <button class="form-control btn btn-info btn-sm" @click.prevent="triggerAddToCart">Add To Cart</button>
                        </div>
                    </div>
                    </div>
                    <hr>

                    <div class="row mt-3">


                        <div v-if="checkout.sale_type === 'W'" class="col-md-6">
                            <label for=""><b>Customer Name</b> </label>
                            <div class="input-group mb-3">
                                <v-select v-model="checkout.customer_id" label="customer_name" class="form-control" :options="getCustomers" :reduce="customer => customer.id" @keypress="errors.clear('customer_id')"/>

                            </div>


                        </div>




                    </div>



                    <div class="row mt-3">

                        <div class="col-md-12">
                            <label for=""><b>Remarks</b> </label>
                            <div class="input-group mb-3">

                                <textarea v-model="checkout.remarks" class="form-control" id=""  rows="5"></textarea>
                            </div>


                        </div>




                    </div>


                </div>

                <div class="d-flex" style="height: 600px;">
                    <div class="vr"></div>
                </div>

                <!-- Right split screen -->
                <div class="col-md-5 ml-3 mt-0">

                    <div class="row">
                        <div class="col-md-12">

                            <div class="card bg-white">
                                <div class="overflow-auto" style="max-height:600px;">
                                    <table v-if="cart.length > 0" class="table table-bordered table-condensed table-striped">
                                        <thead class="thead-light">
                                        <tr>
                                            <th width="5%" scope="col">#</th>
                                            <th width="41%" scope="col">Item</th>
                                            <th width="5%" scope="col">Sale</th>
                                            <th width="14%" scope="col">Qty</th>
                                            <th width="10%" scope="col">Price</th>
                                            <th width="17%" scope="col">Total</th>
                                            <th width="6%" scope="col">Action</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(item, index) in cart" :key="index">
                                            <td scope="row" v-text="index+1"></td>
                                            <td>{{item.product.product_name}} [{{item.detail.gas_type}}]</td>
                                            <td>{{item.detail.sale_type}}</td>

                                    <td>
                                        <button class="btn btn-info btn-sm" @click.prevent="decrement(item,index)"><span><i class="bi bi-dash"></i></span></button>

                                        {{item.quantity}}
                                        <button class="btn btn-info btn-sm" @click.prevent="increment(item)"><span><i class="bi bi-plus"></i></span></button>
                                    </td>
                                            <td>{{item.detail.price}}</td>
                                            <td v-text="cartLineTotal(item)"></td>
                                            <td>
                                                <button class="btn btn-danger" @click.prevent="$store.commit('removeFromCart', index)">
                                                    <span><i class="bi bi-trash"></i></span>
                                                </button>
                                            </td>
                                        </tr>

                                        </tbody>


                                    </table>
                                    <div class="messageVide" v-else>Empty List <span>(Select Product)</span></div>
                                </div>
                            </div>


                            <div class="card-footer">

                                <div class="media">
                                    <div class="media-body">
                                        <div class="row row-sm">

                                            <div class="table-responsive col-sm-12 totalTab">
                                                <table class="table">
                                                    <tbody>
                                                    <tr>
                                                        <td class="active">Sub Total</td>
                                                        <td class="whiteBg" ><span>{{ cartTotal}} </span> KSH
                                                        </td>
                                                        <td class="active" >Discount</td>
                                                        <td class="whiteBg" ><span>{{ this.checkout.discount}} </span> KSH
                                                        </td>
                                                    </tr>

                                                                  <tr>
                                                                      <td class="active">Grand Total</td>
                                                                      <td class="whiteBg light-blue text-bold">
                                                                          <b><span>{{ cartTotalAfterDiscount }} </span> KSH</b>
                                                                      </td>
                                                                      <td class="active">Balance</td>
                                                                      <td class="whiteBg light-blue text-bold">
                                                                          <span v-if="balanceAmount < 0" id="total" style="color: red;">{{ balanceAmount }} KSH</span>
                                                                          <span v-else id="total" style="color: green;">{{ balanceAmount }} KSH</span>
                                                                      </td>
                                                                  </tr>
                                                    </tbody>
                                                </table>
                                                <hr>
                                                <div v-if="cart.length > 0">
                                                <div class="row mt-3">
                                                    <div class="col-md-6">
                                                        <label for=""><b>Payment Mode</b> </label>
                                                        <div class="input-group mb-3">
                                                            <select class="form-control" v-model="checkout.payment_mode"  style="height: 50px;">
                                                                <option value="">Select Payment Mode</option>
                                                                <option value="0">CASH ONLY</option>
                                                                <option value="1">M-PESA PAYBILL</option>
                                                                <option value="2">M-PESA TILLNO</option>
                                                                <option value="3">CASH + M-PESA TILLNO</option>
                                                                <option value="4">CASH + M-PESA PAYBILL</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for=""><b>Amount Paid</b> </label>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" v-model="checkout.amount_paid">
                                                        </div>

                                                    </div>
                                                </div>
                                                    <hr>
                                                <div class="row mt-3">
                                                    <div v-if="checkout.payment_mode == '1' || checkout.payment_mode == '2' || checkout.payment_mode == '3' || checkout.payment_mode == '4'" class="col-md-4">
                                                        <label for=""><b>Phone number</b> </label>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" v-model="checkout.phone_number">
                                                        </div>

                                                    </div>
                                                    <div v-if="checkout.payment_mode == '1' || checkout.payment_mode == '2' || checkout.payment_mode == '3' || checkout.payment_mode == '4'" class="col-md-4">
                                                        <label for=""><b>Time</b> </label>
                                                        <div class="input-group mb-3">
                                                            <input type="time" class="form-control" v-model="checkout.message_time">
                                                        </div>

                                                    </div>
                                                    <div  class="col-md-4">
                                                        <label for=""><b>Discount</b> </label>
                                                        <div class="input-group mb-3">
                                                            <input type="number" min="0" class="form-control"  v-model="checkout.discount">
                                                        </div>

                                                    </div>
                                                </div>


                                                </div>
                                            </div>

                                        </div><!-- row -->

                                    </div>
                                </div><!-- media-body -->
                            </div><!-- media -->


                        </div>
<!--                        <div class="row">-->
<!--                            <div class="col-md-6" id="footer">-->
<!--                                <table class="table table-bordered table-striped" style="margin-bottom: 0;">-->
<!--                                    <tbody>-->
<!--                                    <tr>-->
<!--                                        <td width="30%">Total Paying</td>-->
<!--                                        <td class="text-right" id="total_paying"><span>{{ cartTotal  }}</span></td>-->
<!--                                        &lt;!&ndash; <td width="25%">Total Payable</td>-->
<!--                                          <td width="25%" class="text-right"><span id="twt">{{ cartTotal  }}</span></td> &ndash;&gt;-->
<!--                                    </tr>-->
<!--                                    <tr>-->
<!--                                        <td width="30%">Total Items</td>-->
<!--                                        <td width="70%" class="text-right" id="item_count"><span>{{ cartQuantity }}</span></td>-->
<!--                                        &lt;!&ndash; <td width="25%">Total Payable</td>-->
<!--                                        <td width="25%" class="text-right"><span id="twt">{{ cartTotal  }}</span></td> &ndash;&gt;-->
<!--                                    </tr>-->

<!--                                    </tbody>-->
<!--                                </table>-->
<!--                            </div>-->

<!--                        </div>-->
                    </div>





<!--                    <div class="row my-2">-->
<!--                        <div class="col-md-12">-->
<!--                            <label for=""><b>Payment</b> </label>-->
<!--                            <div class="input-group mb-3">-->
<!--                                <div class="input-group-prepend">-->
<!--                                    <span class="input-group-text" id="basic-addon1"> <b><i>Payment mode</i></b></span>-->
<!--                                </div>-->
<!--                                <select class="form-control" v-model="reciept.payment_mode" @change="OnMpesaSelect" style="height: 50px;">-->
<!--                                    <option value="">Select payment</option>-->
<!--                                    <option value="cash">CASH</option>-->
<!--                                    <option value="mpesa">M-PESA</option>-->
<!--                                    <option value="others">OTHERS</option>-->
<!--                                </select>-->
<!--                            </div>-->


<!--                        </div>-->
<!--                        <div v-if="isMpesa" class="col-md-12">-->
<!--                            <label for=""><b>M-PESA Code</b></label>-->
<!--                            <div class="input-group mb-3">-->
<!--                                <div class="input-group-prepend">-->
<!--                                    <span class="input-group-text" id="basic-addon1"><b><i>Mpesa Code.</i></b></span>-->
<!--                                </div>-->
<!--                                <input type="text" class="form-control" placeholder="Mpesa code" v-model="reciept.mpesa_code" aria-label="amount" style="height: 50px;">-->
<!--                            </div>-->
<!--                        </div>-->


<!--                    </div>-->

<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            <label for=""><b>Amount paid</b></label>-->
<!--                            <div class="input-group mb-3">-->
<!--                                <div class="input-group-prepend">-->
<!--                                    <span class="input-group-text" id="basic-addon1"><b><i>Ksh.</i></b></span>-->
<!--                                </div>-->
<!--                                <input type="number" class="form-control" placeholder="Amount" v-model="reciept.amount_paid" aria-label="amount" style="height: 50px;">-->
<!--                            </div>-->

<!--                        </div>-->

<!--                    </div>-->




                    <!-- Buttons -->
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <button type="button" class="btn btn-danger btn-block btn-lg" @click="cancel"><i class="bi bi-x-circle"></i> Cancel</button>
                        </div>
                        <!-- <div class="col-md-4">
                            <button type="button" v-if="this.hold" class="btn btn-warning btn-block btn-lg" id="bg-orange" @click="holdCartItems" disabled><i class="bi bi-pause-fill"></i> Hold</button>
                            <button type="button" v-else class="btn btn-warning btn-block btn-lg" id="bg-orange" @click="holdCartItems"><i class="bi bi-pause-fill"></i> Hold</button>

                        </div> -->
                        <div class="col-md-6">
                            <button type="button" v-if="$store.state.cart == 0" disabled @click.prevent="saveTransaction" class="btn btn-warning btn-block btn-lg"><i class="bi bi-cash"></i> Payment</button>
                            <button type="button" v-else class="btn btn-success btn-block btn-lg" @click.prevent="saveTransaction"><i class="bi bi-cash"></i> Payment</button>
                        </div>
                    </div>
                <!--Buttons-->


                </div>
            </div>
        </div>



    </div>
</template>
<script>
// import {
//     EventBus
// } from '../events/event-bus';
//import _ from 'lodash';
import Errors from '../errors/errors';
import SweetAlert from '../alerts/alert';
// import SearchComponent from '../components/Search/SearchComponent.vue'

export default {
    data() {
        return {

            checkout: {
                product_id: '',
                sale_type: '',
                gas_type: '',
                payment_mode: '',
                customer_id: '',
                remarks: '',
                phone_number: '',
                message_time: '',
                sub_total: '',
                discount:'',
                gas_status: '',
                amount_paid: '',
                balance: '',


            },
            alert: new SweetAlert(),
            search: '',

        }
    },


    // created() {
    //
    //     // recieve search from search component
    //     EventBus.$on('search', (value) => {
    //         this.search = value
    //     })
    // },

    // components: {
    //     SearchComponent
    // },
    mounted() {
        this.$store.dispatch("fetchProduct")
        this.$store.dispatch("fetchCustomer")


    },
    methods: {
        // this function trigers the barcode scanner and responds to it
        // the debounce function helps it to wait for atleast 1 second in
        // order to send a single request to the DB instead of 3


        triggerAddToCart() {

            let productIndex = this.$store.state.products.findIndex(item => item.id === this.checkout.product_id);


            if (productIndex != -1) {
                let gas_type = this.checkout.gas_type
                let sale_type = this.checkout.sale_type
                let price = this.$store.state.products[productIndex].price
                let product = this.$store.state.products[productIndex]

                let new_price = this.determinePrice(gas_type,sale_type,price);

                let detail = {
                    gas_type: gas_type,
                    sale_type: sale_type,
                    price:new_price
                }

                this.addToCart(product, detail)

                this.checkout.product_id = ''
                this.checkout.gas_type = ''
                this.checkout.sale_type = ''
            }


        },
    determinePrice(gas_type, sale_type, price) {

        let final_price = "";
        switch (true) {

            case (gas_type === 'C' && sale_type === 'W'):
                final_price = price.complete.wholesale_price;
                break;
            case (gas_type === 'C' && sale_type === 'R'):
                final_price = price.complete.retail_price;
                break;
            case (gas_type === 'E' && sale_type === 'W'):
                final_price = price.refill.wholesale_price;
                break;
            case (gas_type === 'E' && sale_type === 'R'):
                final_price = price.refill.retail_price;
                break;
            default:
                final_price = "Invalid";
        }
        return final_price;
    },
    // cart functionality
    getCartItem: function (product) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].product.id === product.id) {
                return this.cart[i];
            }
        }

        return null;
    },
    addToCart: function (product, detail) {
        let cartItem = this.getCartItem(product);
        // if (cartItem != null) {
        //     cartItem.quantity++;
        // } else {
        this.cart.push({
            product: product,
            detail: detail,
            quantity: 1,
        });
        //}
        //product.quantity--;
    },
    increment: function (item) {

        //item.product.quantity--;
        item.quantity++;
    },
    decrement: function (item, index) {
        //product.quantity--;
        //item.product.quantity++;
        item.quantity--;
        if (item.quantity == 0) {
            this.$store.commit('removeFromCart', index)
        }

    },

    // method for emptying input fields
    reset() {
        //  this.reciept.customer_name = ""

        this.reciept.total_amount = ""
        this.reciept.total_quantity = ""
        this.reciept.amount_paid = ""
        this.reciept.balance = ""
        this.reciept.sub_total = ""


        // empty the data object
        Object.assign(this.$data, this.$options.data())
    },


    saveTransaction() {

        // reciept details
        let checkout = this.checkout

        // cart details
        let cart = this.$store.state.cart

        // balance
        let balance = this.balanceAmount

        // total_amount
        let total_amount = this.cartTotalAfterDiscount

        // discount
        let discount = this.checkout.discount

        // quantity
        let total_quantity = this.cartQuantity

        axios.post('/checkout', {
            checkout,
            cart,
            balance,
            discount,
            total_amount,
            total_quantity
        }).then((response) => {

            // display success message from backend
            this.alert.successLarge(response.data.success)

            // clear the cart
            //this.$store.dispatch('clearCart', [])

            // get products
            this.getProducts

            //reload
            //window.location.reload(false);

        }).catch((error) => {
            // display the error
            this.alert.error(error.response.data.errors)
        })

    },
    cancel() {
        this.$store.dispatch('clearCart', [])
        this.reset()
        this.getProducts

    },
    cartLineTotal(item) {
        let price = item.detail.price * item.quantity;
        return price;
    }

    },
    computed: {
        getProducts(){
            return this.$store.getters.getProducts
        },
        getCustomers(){
            return this.$store.getters.getCustomers
        },

        cart() {
            return this.$store.state.cart;
        },
        balanceAmount() {
            let balance = this.checkout.amount_paid - this.cartTotalAfterDiscount;

            return balance;
        },
        cartQuantity() {
            //set the the total quantity to data object
            let quantity = this.cart.reduce((acc, item) => acc + item.quantity, 0);

            return quantity;
        },
        cartTotal() {
            let price = this.cart.reduce((acc, item) => acc + (item.detail.price * item.quantity), 0);

            return price;
        },
        cartTotalAfterDiscount() {
            let totalAfterDiscount = this.cartTotal - this.checkout.discount;

            return totalAfterDiscount;
        },
        // cartTotalBeforeTax(){
        //     let subTotal = this.cart.reduce((acc, item) => acc + ((item.product.price - item.product.vat_rate) *  item.quantity), 0);
        //
        //     //this.reciept.sub_total = parseFloat(subTotal).toFixed(2);
        //     return parseFloat(subTotal.toFixed(2));
        //
        // },
        // vatTotal(){
        //     var sum = 0;
        //     this.cart.forEach(function(item){
        //         // var total = item.price * item.quantity
        //         let total_vat = item.product.vat_rate * item.quantity
        //         sum += parseFloat(total_vat);
        //     });
        //     return sum.toFixed(2);
        //     //let vat = this.cartTotal - this.cartTotalBeforeTax;
        //
        // },


    },

}
</script>

<style lang="css" scoped>
/*Modal style*/
.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
    background-color: #cadae3;
}
.table>tbody>tr>td, .table>tfoot>tr>td{
    vertical-align: middle;
}
@media screen and (max-width: 600px) {
    table#cart tbody td .form-control{
        width:20%;
        display: inline !important;
    }
    .actions .btn{
        width:36%;
        margin:1.5em 0;
    }

    .actions .btn-info{
        float:left;
    }
    .actions .btn-danger{
        float:right;
    }

    table#cart thead { display: none; }
    table#cart tbody td { display: block; padding: .6rem; min-width:320px;}
    table#cart tbody tr td:first-child { background: #333; color: #fff; }
    table#cart tbody td:before {
        content: attr(data-th); font-weight: bold;
        display: inline-block; width: 8rem;


    }
}

table#cart tfoot td{display:block; }
table#cart tfoot td .btn{display:block;}
.messageVide {
    font-size: 25px;
    width: 100%;
    background-color: #c2dae8;
    padding: 1.5em 0;
    border-radius: 5px;
    font-weight: lighter;
    display: inline-block;
    text-align: center;
}
.modal-mask {

    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}
.modal-lg{
    width: 750px;
}
.modal-header {
    background-color: #34373d;
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
/*Modal style*/

#footer {
    position: fixed;
    left: 0;
    bottom: 0;
    /* width: 100%;*/
    text-align: left;
}
#itempay{
    font-size:25px;
}
#paybal{
    font-size: 25px;
}
#total_paying{
    font-size:60px;
    color: green;
}
#item_count{
    font-size:40px;
    color: green;
}
#card-details {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}
#product-details {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}
input[type='number']{
    width: 80px;
}


</style>
