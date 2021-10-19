<template>
<div class="row">
    <div class="col-md-12">
        <!-- <SearchComponent></SearchComponent> -->
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Inventory</h4>
            </div>
            <div class="card-body">
                <div class="table-responsive">
<!--                    <table class="table table-bordered table-nowrap mb-0">-->
<!--                        <thead>-->
<!--                        <tr>-->
<!--                            <th>#</th>-->
<!--                            <th>Branch name</th>-->
<!--                            <th>Brand Name</th>-->
<!--                            <th>Brand products</th>-->

<!--                        </tr>-->
<!--                        </thead>-->
<!--                        <tr v-for="(inventory, index) in filteredData" :key="inventory.id">-->

<!--                            <td rowspan=3>{{index + 1}}</td>-->
<!--                            <td rowspan=4>{{ inventory.branch_name }}</td>-->

<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td rowspan=1>App Memory</td>-->
<!--                            <td rowspan=1>App Test</td>-->
<!--                        </tr>-->


<!--                        <tr>-->
<!--                            <td rowspan=1>SystemEnv2</td>-->
<!--                            <td rowspan=1>System Test</td>-->

<!--                        </tr>-->


<!--                    </table>-->
                    <table class="table table-responsive-md table-bordered">  <tr>
                        <th>Date</th>
                        <th>Product name</th>
                        <th>Branch name</th>
                        <th>Stock In</th>
                        <th>Stock out</th>
                        <th>Total</th>
                    </tr>
                        <tbody v-for="(transfer, index) in filteredData">
                        <tr>
                            <!-- this cell will occupy 3 columns -->
                            <td colspan=3>{{ index }}</td>
                        </tr>
                        <tr v-for="t in transfer">
                            <td>{{t.products.product_name}}</td>
<!--                            <td v-if="t.branches.branch_name !=''">{{ t.branches.branch_name }}</td>-->
                            <td>{{t.stock_in}}</td>
                            <td>{{t.stock_out}}</td>
                        </tr>



<!--                            <tr v-for="(transfer, index) in filteredData" :key="transfer.id">-->

<!--                                 <td></td>-->
<!--                                <td>{{index}}</td>-->
<!--&lt;!&ndash;                                <td>{{transfer.products.product_name}}</td>&ndash;&gt;-->
<!--                                <td v-for="t in transfer">{{t}}</td>-->
<!--&lt;!&ndash;                                <td>{{transfer.stock_out}}</td>&ndash;&gt;-->
<!--&lt;!&ndash;                                <td>{{transfer.remarks}}</td>&ndash;&gt;-->

<!--                            </tr>-->

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// import SearchComponent from '../Search/SearchComponent.vue';
// import {
//     EventBus
// } from '../../events/event-bus';
export default {
    data() {
        return {
            search: '',
        }
    },
    mounted() {
        this.$store.dispatch("fetchTransfer")
    },
    // components: {
    //     SearchComponent
    // },
    computed: {

        filteredData() {
            // return this.$store.getters.getInventory.filter(item =>
            //     item.category_name.toLowerCase().includes(
            //         this.search.toLowerCase()
            //     ))
            return this.$store.getters.getTransfers
        },

    },
    // created() {
    //     EventBus.$on('search', (value) => {
    //         this.search = value
    //     })
    // },
    methods: {
        // This event bus is created to transfer the value of edit = true to the create component
        // emitEditValue(category) {
        //     EventBus.$emit('edit', this.edit, category)
        // },
        // disable(id) {
        //     swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         type: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //     }).then((result) => {

        //             if (result.value) {
        //           let uri = `/categories/${id}`;
        //           axios.post(uri).then(response => {
        //               this.$store.state.categories.splice(this.$store.state.categories.indexOf(id), 1);
        //               window.location.reload(false);
        //               //this.fetchData();
        //           });
        //             swal.fire(
        //                 'Deleted!',
        //                 'Category has been deleted.',
        //                 'success'
        //             )
        //         }
        //     }).
        //     catch(()=>{
        //       swal("Failed","There was something wrong","warning");
        //     })


        // }
    }
}
</script>
