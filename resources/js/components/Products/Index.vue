
    <template>
        <div class="row">
            <div class="col-md-12">

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
                                    <th>Product Name</th>
                                    <th width="13%">Category</th>
                                    <th width="30%">Price</th>
                                    <th width="20%">Quantity</th>
                                     <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(product, index) in getProducts" :key="product.id">
                                    <td>{{index + 1}}</td>

                                    <td>{{product.product_name}}</td>
                                    <td>{{product.brands.brand_name}}</td>
                                    <td>
                                        <b>Complete</b> => Retail: {{product.price.complete.retail_price}}/= , Wholesale: {{product.price.complete.wholesale_price}}/=
                                        <br>
                                        <b>Refill</b> => Retail: {{product.price.refill.retail_price}}/= , Wholesale: {{product.price.refill.wholesale_price}}/=
                                    </td>
                                    <td>
                                        <b>Outlight</b> => {{product.quantity.outlight}}
                                        <br>
                                        <b>Empty</b> => {{product.quantity.empty}}

                                    </td>
                                    <td>
                                        {{product.quantity.empty + product.quantity.outlight}}
                                    </td>
                                    <td>
                                        <router-link :to="{name: 'products.edit', params: { id: product.id }}"  class="btn btn-primary btn-sm">Edit</router-link>
<!--                                        <button class="btn btn-danger btn-sm" @click.prevent="disable(product.id)">Delete</button>-->
                                          <router-link :to="{name: 'products.view', params: { id: product.id }}"  class="btn btn-info btn-sm">View</router-link>

                                    </td>

                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        data(){
          return{

          }
        },
        mounted() {
            this.$store.dispatch("fetchProduct")
        },
        computed: {
            getProducts() {
                return this.$store.getters.getProducts
            }
        }
    }
    </script>


