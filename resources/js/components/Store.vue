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
                                    <h3>Sale</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="checkout.gas_type" value="C"  id="flexRadioDefault1">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Complete
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-md-4">

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="checkout.gas_type" value="R"  id="flexRadioDefault2" >
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Refill
                                            </label>
                                        </div>
                                    </div>
                                        <div class="col-md-4">

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" v-model="checkout.gas_type" value="O"  id="flexRadioDefault7">
                                                <label class="form-check-label" for="flexRadioDefault7">
                                                    Others
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
                                    <h3>Category</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="form-check">
                                                <input class="form-check-input" v-model="checkout.sale_type" value="WHL" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                                                <label class="form-check-label" for="flexRadioDefault3">
                                                    Wholesale
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" v-model="checkout.sale_type" value="RET" name="flexRadioDefault" id="flexRadioDefault4" checked>
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
                            <label for=""><b>Outright cylinder</b> </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"> <b><i>Outright cylinder</i></b></span>
                                </div>
                                <vue-select v-model="checkout.product_id" label="product_name" class="form-control" :options="getProducts" :reduce="product => product.id"  @keypress="errors.clear('product_id')"/>

                            </div>

                        </div>

                        <div v-if="checkout.gas_type === 'R'" class="col-md-6">
                            <label for=""><b>Exchanged Cylinder</b> </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"> <b><i>Exchanged Cylinder</i></b></span>
                                </div>
                                <vue-select v-model="checkout.exchanged_id" label="product_name" class="form-control" :options="getProducts" :reduce="product => product.id" @keypress="errors.clear('product_id')"/>

                            </div>


                        </div>

                    </div>
                    <div v-if="checkout.gas_type !=='' && checkout.sale_type!==''" class="row mt-2">
                        <div class="col-md-2">
                        <button class="form-control btn btn-info btn-sm" @click.prevent="triggerAddToCart"><i class="fas fa-cart-plus"></i> Add To Cart</button>
                        </div>
                    </div>
                    </div>
                    <hr>




                    <div class="row mt-3">

                        <div class="col-md-12">
                            <label for=""><b>Remarks</b> </label>
                            <div class="input-group mb-3">

                                <textarea v-model="checkout.remarks" class="form-control"  rows="5"></textarea>
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
                                            <th width="35%" scope="col">Item</th>
                                            <th width="5%" scope="col">Sale</th>
                                            <th width="30%" scope="col">Qty</th>
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
                                        <button class="btn btn-info btn-sm" @click.prevent="decrement(item,index)"><span><i class="fas fa-minus"></i></span></button>

                                        {{item.quantity}}
                                        <button class="btn btn-info btn-sm" @click.prevent="increment(item)"><span><i class="fas fa-plus"></i></i></span></button>
                                    </td>
                                            <td>{{item.detail.price}}</td>
                                            <td v-text="cartLineTotal(item)"></td>
                                            <td>
                                                <button class="btn btn-danger" @click.prevent="$store.commit('removeFromCart', index)">
                                                    <span><i class="far fa-trash-alt"></i></span>
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
                                                            <label for=""><b>Customer Name (optional)</b> </label>
                                                            <div class="input-group mb-3">
                                                                <vue-select v-model="checkout.customer_id" label="customer_name" class="form-control" :options="getCustomers" :reduce="customer => customer.id" @keypress="errors.clear('customer_id')"/>

                                                            </div>


                                                        </div>
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
                                                                    <option value="5">EQUITY PAYBILL</option>
                                                                    <option value="6">CASH + EQUITY PAYBILL</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                    </div>
                                                <div class="row mt-3">

                                                    <div class="col-md-12">
                                                        <label for=""><b>Amount Paid</b> </label>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" v-model="checkout.amount_paid">
                                                        </div>

                                                    </div>
                                                </div>
                                                    <hr>
                                                <div class="row mt-3">
                                                    <div v-if="checkout.payment_mode !== '0' && checkout.payment_mode !== ''" class="col-md-4">
                                                        <label for=""><b>Phone number</b> </label>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" v-model="checkout.phone_number">
                                                        </div>

                                                    </div>
                                                    <div v-if="checkout.payment_mode !== '0' && checkout.payment_mode !== '' " class="col-md-4">
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

<!--                                                <div class="row">-->
<!--                                                    <div class="form-check form-switch">-->
<!--                                                        <label class="switch">-->
<!--                                                            Print Reciept-->
<!--                                                            <input type="checkbox">-->
<!--                                                            <span class="slider round"></span>-->
<!--                                                        </label>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                </div>
                                            </div>

                                        </div><!-- row -->

                                    </div>
                                </div><!-- media-body -->
                            </div><!-- media -->


                        </div>

                    </div>


                    <!-- Buttons -->
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <button type="button" class="btn btn-danger btn-block btn-lg" @click="cancel"><i class="far fa-times-circle"></i> Cancel</button>
                        </div>

                        <div class="col-md-6">
                            <button type="button" v-if="$store.state.cart === 0" disabled @click.prevent="saveTransaction" class="btn btn-warning btn-block btn-lg"><i class="fas fa-money-bill-wave"></i> Payment</button>
                            <button type="button" v-else-if="checkout.payment_mode.length === 0" disabled @click.prevent="saveTransaction" class="btn btn-warning btn-block btn-lg"><i class="fas fa-money-bill-wave"></i> Payment</button>
                            <button type="button" v-else-if="checkout.amount_paid.length === 0" disabled @click.prevent="saveTransaction" class="btn btn-warning btn-block btn-lg"><i class="fas fa-money-bill-wave"></i> Payment</button>
                            <button type="button" v-else class="btn btn-success btn-block btn-lg" @click.prevent="saveTransaction"><i class="fas fa-money-bill-wave"></i> Payment</button>
                        </div>
                    </div>
                <!--Buttons-->

                    <div v-if="checkout.showReceipt">
                        <transition name="modal">
                            <div class="modal-mask">
                                <div class="modal-wrapper">

                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Reciept</h5>
                                                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true" @click="showReceipt = false">&times;</span>
                                                </button> -->
                                            </div>
                                            <div class="modal-body" id="modal-body">
                                                <Print />
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" @click="closeReciept">Close</button>
                                                <button type="button" @click="print()" class="btn btn-primary">Print</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </transition>
                    </div>



                </div>
            </div>
        </div>



    </div>
</template>
<script>

//import _ from 'lodash';
import Errors from '../errors/errors';
import SweetAlert from '../alerts/alert';
 import {EventBus} from "../events/event-bus";
import Print from "../components/Printer/Print";
// import SearchComponent from '../components/Search/SearchComponent.vue'

export default {
    components: {Print},
    data() {
        return {

            checkout: {
                product_id: '',
                exchanged_id:'',
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
                showReceipt:false,
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
        if (item.quantity === 0) {
            this.$store.commit('removeFromCart', index)
        }

    },

    // method for emptying input fields
    reset() {
        this.checkout.amount_paid = ""
        this.checkout.sub_total = ""
        this.checkout.product_id = ""
        this.checkout.exchanged_id=""
        this.checkout.gas_type=""
        this.checkout.sub_total=""
        this.checkout.amount_paid=""
        this.checkout.remarks=""
        this.checkout.message_time=""
        this.checkout.discount=""
        this.checkout.customer_id=""
        this.checkout.sale_type=""
        this.checkout.payment_mode=""


        // empty the data object
        Object.assign(this.$data, this.$options.data())
    },
        getRandomNumberBetween(){
            return Math.ceil(Math.random()*1000000)
        },

    saveTransaction() {

        // reciept details
        let checkout = this.checkout

        // reciept_code
        let reciept_code = this.getRandomNumberBetween()

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

        let print_detail = {
            checkout: checkout,
            cart : cart,
            cart_total:this.cartTotal,
            total_amount:total_amount,
            balance:balance,
            reciept_code:reciept_code

        }

        axios.post('/checkout', {
            checkout,
            cart,
            balance,
            discount,
            total_amount,
            total_quantity,
            reciept_code
        }).then((response) => {
            // display success message from backend
            this.alert.successLarge(response.data.success)

            swal.fire({
                title: 'Print Reciept',
                text: "Do you want to print reciept?",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, print it!'
            }).then((result) => {

                if (result.isConfirmed) {
                    // store on local storage
                    this.sendPrintDetails(print_detail)
                    window.location.href = '/print';

                }
            }).
            catch(()=>{
                this.alert.errorLarge("Failed to print reciept")
            })

            // clear the cart
             this.$store.dispatch('clearCart', [])
            //
            // reset
            this.reset()

            // get products
            this.getProducts()

            // this.sendPrintDetails(print_detail)
            //
            // window.location.href = '/print';

            //reload
            //window.location.reload(false);

        }).catch((error) => {
            // display the error
          // this.alert.errorLarge(error.response.data.errors)
        })

    },
        sendPrintDetails(printable){
           // return EventBus.$emit('print',printable);
            localStorage.clear();
            localStorage.setItem('print', JSON.stringify(printable));
        },
        triggerAddToCart() {

            let productIndex = this.$store.state.products.findIndex(item => item.id === this.checkout.product_id);


            if (productIndex !== -1) {
                let gas_type = this.checkout.gas_type
                let sale_type = this.checkout.sale_type
                let price = this.$store.state.products[productIndex].price
                let product = this.$store.state.products[productIndex]
                let exchanged_gas = this.checkout.exchanged_id

                let new_price = this.determinePrice(gas_type,sale_type,price);

                let detail = {
                    gas_type: gas_type,
                    sale_type: sale_type,
                    price:new_price,
                    exchanged:exchanged_gas
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

                case (gas_type === 'C' && sale_type === 'WHL'):
                    final_price = price.complete.wholesale_price;
                    break;
                case (gas_type === 'C' && sale_type === 'RET'):
                    final_price = price.complete.retail_price;
                    break;
                case (gas_type === 'R' && sale_type === 'WHL'):
                    final_price = price.refill.wholesale_price;
                    break;
                case (gas_type === 'R' && sale_type === 'RET'):
                    final_price = price.refill.retail_price;
                    break;
                case (gas_type === 'O' && sale_type === 'WHL'):
                    final_price = price.complete.wholesale_price;
                    break;
                case (gas_type === 'O' && sale_type === 'RET'):
                    final_price = price.complete.retail_price;
                    break;
                default:
                    final_price = "Invalid";
            }
            return final_price;
        },
    cancel() {
        this.$store.dispatch('clearCart', [])
        this.reset()
        this.getProducts

    },
    cartLineTotal(item) {
        let price = item.detail.price * item.quantity;
        return price;
    },


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

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

</style>
