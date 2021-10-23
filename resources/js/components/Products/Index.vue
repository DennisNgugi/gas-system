
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
                                    <th>Product Name</th>
                                    <th width="13%">Category</th>
                                    <th width="30%">Price</th>
                                    <th width="20%">Quantity</th>
                                     <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(product, index) in filteredData" :key="product.id">
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
                                        <br>
                                        <b>Qty</b> => {{product.quantity.others}}

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
                                <infinite-loading @distance="1" spinner="spiral" @infinite="infiniteHandler">
                                    <div class="text-red" slot="no-more">No more products</div>
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
    export default {
        data(){
          return{
              search: '',
              products:[],
              page:1,
              bottom:false,
          }
        },
        mounted() {
            //this.$store.dispatch("fetchProduct")
        },
        methods:{
            infiniteHandler($state){
                setTimeout(function (){


                    axios.get('/product?page='+this.page).then((response)=>{
                        if(response.data.products.data.length > 0){
                            // let lastPage = response.data.reciepts.last_page
                            response.data.products.data.forEach(product => {
                                this.products.push(product);
                            });
                            $state.loaded();
                            this.page +=1;

                        }

                    }).catch(e => console.log(e));

                }.bind(this),1000);
            },
        },
        computed: {
            filteredData() {
                return this.products.filter(item =>
                    item.product_name.toLowerCase().includes(
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


