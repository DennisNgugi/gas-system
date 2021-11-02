<template>
    <div class="row">


<!--        <div id="ticket">-->
<!--            <p class="centered">RECEIPT EXAMPLE-->
<!--                <br>Address line 1-->
<!--                <br>Address line 2</p>-->
<!--            <table>-->
<!--                <thead>-->
<!--                <tr>-->
<!--                    <th class="quantity">Q.</th>-->
<!--                    <th class="description">Description</th>-->
<!--                    <th class="price">$$</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                    <td class="quantity">1.00</td>-->
<!--                    <td class="description">ARDUINO UNO R3</td>-->
<!--                    <td class="price">$25.00</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="quantity">2.00</td>-->
<!--                    <td class="description">JAVASCRIPT BOOK</td>-->
<!--                    <td class="price">$10.00</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="quantity">1.00</td>-->
<!--                    <td class="description">STICKER PACK</td>-->
<!--                    <td class="price">$10.00</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="quantity"></td>-->
<!--                    <td class="description">TOTAL</td>-->
<!--                    <td class="price">$55.00</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--            </table>-->
<!--            <p class="centered">Thanks for your purchase!-->
<!--                <br>parzibyte.me/blog</p>-->
<!--            <button id="btnPrint"  class="hidden-print btn btn-primary btn-sm" @click.prevent="printMe">Print</button>-->

<!--        </div>-->
        <receipt-item :products="productItems"></receipt-item>

    </div>

</template>

<script>
import { Receipt, ReceiptItem, ReceiptSummary } from 'vue-receipt-component';
export default {
    data(){
        return {
            productItems: [
                {name: 'Cheese Product 1', price: 2.50},
                {name: 'Cheese Product 2', price: 3.23},
                {name: 'Cheese Product 3', price: 4.35},
                {name: 'Cheese Product 4', price: 1.99}
            ],
            productSummary: {
                subtotal: 25.25,
                discount: 25,
                discountprice: 10,
                vatpercentage: 21,
                vatprice: 20,
                total: 1400
            }
        }
    },

    methods:{
        printMe() {
            var newstr = document.getElementById('ticket').innerHTML
            document.body.innerHTML = newstr
            window.print()
            window.location.reload()
        }
    },
    components: {
        Receipt,
        ReceiptItem,
        ReceiptSummary
    }
}
</script>

<style scoped>
* {
    font-size: 12px;
    font-family: 'Times New Roman';
}

td,
th,
tr,
table {
    border-top: 1px solid black;
    border-collapse: collapse;
}

td.description,
th.description {
    width: 75px;
    max-width: 75px;
}

td.quantity,
th.quantity {
    width: 40px;
    max-width: 40px;
    word-break: break-all;
}

td.price,
th.price {
    width: 40px;
    max-width: 40px;
    word-break: break-all;
}

.centered {
    text-align: center;
    align-content: center;
}

#ticket {
    width: 155px;
    max-width: 155px;
}

img {
    max-width: inherit;
    width: inherit;
}

@media print {
    .hidden-print,
    .hidden-print * {
        display: none !important;
    }
}
</style>
