<template>
    <div class="row">
        <div class="col-md-12">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Search</span>
                </div>
                <input type="text" v-model="search"  class="form-control" autofocus placeholder="Search by date or branch name....."  aria-describedby="basic-addon1">
            </div>
            <div class="card">

                <div class="card-body">

                    <div class="tab-content">
                        <div class="active tab-pane" id="transfers">
                            <div>

                                <table class="table table-responsive-md table-bordered">
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Stock in</th>
                                        <th>Stock out</th>
                                        <th>Branch</th>
                                        <th>Gas Type</th>

                                    </tr>
                                    <tbody>

                                    <tr v-for="(t, index) in filteredData">
                                        <td>{{index+1}}</td>
                                        <td v-text="t.created_at"></td>
                                        <td>{{t.stock_in}}</td>
                                        <td>{{t.stock_out}}</td>
                                        <td v-if="t.branches != null">{{t.branches.branch_name}}</td>
                                        <td v-else>N/A</td>
                                        <td v-text="gasType(t.gas_type)"></td>
                                    </tr>
                                    <infinite-loading @distance="1" spinner="spiral" @infinite="infiniteHandler">
                                        <div class="text-red" slot="no-more">No more transfers</div>
                                        <div class="text-red" slot="no-results">No more transfers</div>
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
import InfiniteLoading from 'vue-infinite-loading';

export default {
    data(){
        return{
            search:'',
            bottom:false,
            transfer:[],
            page:1
        }
    },

    methods:{
        gasType(type){
            if(type === 'e'){
                return 'Empty'
            }else {
                return 'Outright'
            }

        },
        infiniteHandler($state){
            setTimeout(function (){


                axios.get(`/product/transfers/view/${this.$route.params.id}?page=`+this.page).then((response)=>{
                    if(response.data.transfers.data.length > 0){
                        // let lastPage = response.data.reciepts.last_page
                        response.data.transfers.data.forEach(transfer => {
                            this.transfer.push(transfer);
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
    computed:{

        filteredData() {
            return this.transfer.filter(item =>
                item.created_at.toLowerCase().includes(
                    this.search.toLowerCase()
                ) ||
                item.branches.branch_name.toLowerCase().includes(
                    this.search.toLowerCase()
                ));

        },

    }
}
</script>

<style scoped>

</style>
