<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">

                <div class="card-body">

                    <div class="tab-content">
                        <div class="active tab-pane" id="transfers">
                            <div>

                            <table class="table table-responsive-md table-bordered">
                                <tr>
                                 <th>#</th>
                                <th>Date</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Sale Type</th>

                            </tr>
                                <tbody>

                                <tr v-for="(t, index) in filteredData">
                                    <td>{{index+1}}</td>
                                    <td v-text="t.created_at"></td>
                                    <td>{{t.quantity}}</td>
                                    <td>{{t.sale_type}}</td>
                                    <td v-text="saleType(t.gas_type)"></td>
                                </tr>

                                <infinite-loading @distance="1" spinner="spiral" @infinite="infiniteHandler">
                                    <div class="text-red" slot="no-more">No more sales</div>
                                    <div class="text-red" slot="no-results">No more sales</div>
                                </infinite-loading>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <!-- /.tab-content -->
                </div><!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>

    </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
    data(){
        return{
            sales:[],
            bottom:false,
            page:1,
            search:'',
        }
    },


    methods:{
        saleType(type){
            if (type === 'O'){
                return 'Others'
            }else if (type === 'R'){
                return 'Refill'
            }else{
                return 'Complete'
            }
        },
        infiniteHandler($state){
            setTimeout(function (){


                axios.get(`/product/sales/view/${this.$route.params.id}?page=`+this.page).then((response)=>{
                    if(response.data.sales.data.length > 0){
                        // let lastPage = response.data.reciepts.last_page
                        response.data.sales.data.forEach(sale => {
                            this.sales.push(sale);
                        });
                        $state.loaded();
                        this.page +=1;

                    }

                }).catch(e => console.log(e));

            }.bind(this),1000);
        },


    },
    components: {
        InfiniteLoading,
    },
    computed: {

        filteredData() {
            return this.sales.filter(item =>
                item.created_at.toLowerCase().includes(
                    this.search.toLowerCase()
                ));

        }
    }
}
</script>

<style scoped>

</style>
