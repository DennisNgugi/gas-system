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
                    <table class="table table-nowrap mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category name</th>
                                <th></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(inventory, index) in filteredData" :key="inventory.id">
                                <td>{{index + 1}}</td>
                                <!-- <td>{{category.category_name}}</td> -->

                                <td>
                                    <!-- <router-link :to=" { name: 'categories.create'} " exact v-on:click.native="emitEditValue(category)" class="btn btn-primary btn-sm">Edit</router-link> -->
                                    <!-- <button class="btn btn-danger btn-sm" @click="disable(category.id)">Delete</button> -->

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
// import SearchComponent from '../Search/SearchComponent.vue';
// import {
//     EventBus
// } from '../../events/event-bus';
export default {
    data() {
        return {
            edit: true,
            search: '',
        }
    },
    mounted() {
        this.$store.dispatch("fetchInventory")
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
            return this.$store.getters.getInventory
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
