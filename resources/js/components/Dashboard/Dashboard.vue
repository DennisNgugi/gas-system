<template>
    <div>
    <div class="row">
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>{{getTotalProducts}}</h3>

                    <p>Products</p>
                </div>
                <div class="icon">
                    <i class="ion ion-bag"></i>
                </div>
                <router-link to="/admin/products/index" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
                <div class="inner">
                    <h3>{{ getOutlightProductQuantity }}</h3>

                    <p>Outlight cylinders</p>
                </div>
                <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                </div>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3>{{ getEmptyProductQuantity }}</h3>
                    <p>Empty cylinders</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person-add"></i>
                </div>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3>{{ getNormalProductQuantity }}</h3>

                    <p>Normal items</p>
                </div>
                <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                </div>
            </div>
        </div>
        <!-- ./col -->
    </div>

    <div class="row">
        <div class="col-md-6 d-flex">

            <!-- Recent Orders -->
            <div class="card card-table flex-fill">
                <div class="card-header">
                    <h4 class="card-title">Last Week</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-center">
                            <thead>
                            <tr>
                                <th>Day</th>
                                <th>Quantity</th>
                                <th class="text-center">Total</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(day,index) in lastWeekRevenue" :key="index">
                                <td class="text-nowrap">
                                    <div class="font-weight-600">{{day.dayname}}</div>
                                </td>
                                <td class="text-nowrap">{{day.quantity}}</td>
                                <td class="text-center">{{day.amount| formatNumber}}</td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        <div class="col-md-6 d-flex">

            <!-- Recent Orders -->
            <div class="card card-table flex-fill">
                <div class="card-header">
                    <h4 class="card-title">Current Week</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-center">
                            <thead>
                            <tr>
                                <th>Day</th>
                                <th>Quantity</th>
                                <th class="text-center">Total</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(day,index) in weeklyRevenue" :key="index">
                                <td class="text-nowrap">
                                    <div class="font-weight-600">{{day.dayname}}</div>
                                </td>
                                <td class="text-nowrap">{{day.quantity}}</td>
                                <td class="text-center">{{day.amount| formatNumber}}</td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- /Recent Orders -->

        </div>
        <div class="col-md-6 d-flex">

            <!-- weekly Orders -->
            <div class="card card-table flex-fill">
                <div class="card-header">
                    <h4 class="card-title">Current Year</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-center">
                            <thead>
                            <tr>
                                <th>Month</th>
                                <th>Quantity</th>
                                <th class="text-center">Total</th>


                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(month,index) in yearlyRevenue" :key="index">
                                <td class="text-nowrap">
                                    <div class="font-weight-600">{{month.month}}</div>
                                </td>
                                <td class="text-nowrap">{{month.quantity}}</td>
                                <td class="text-center">{{month.amount| formatNumber}}</td>

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
    data() {
        return {
            yearlyRevenue: [],
            weeklyRevenue: [],
            lastWeekRevenue:[],
            normalQuantity:'',
            outlightQuantity:'',
            emptyQuantity:'',
        }
    },

    mounted() {
        this.$store.dispatch("fetchProduct")
        this.getTotalYearRevenue()
        this.getTotalWeekRevenue()
    },

    methods: {
        getTotalYearRevenue() {
            axios.get('/yearly_report').then((response) => {
                this.yearlyRevenue = response.data.yearly
            }).catch((error) => {
                console.log(error)
            })
        },
        getTotalWeekRevenue() {
            axios.get('/weekly_report').then((response) => {
                this.weeklyRevenue = response.data.weekly
            }).catch((error) => {
                console.log(error)
            })
        },
        getLastWeekRevenue() {
            axios.get('/last_week').then((response) => {
                this.lastWeekRevenue = response.data.lastWeekRevenue
            }).catch((error) => {
                console.log(error)
            })
        },
    },
    created() {
    },

    computed: {

        getTotalProducts() {
            return this.$store.getters.getProducts.length
        },

        getOutlightProductQuantity(){
            let sum_outlight = 0;

             this.$store.getters.getProducts.forEach(function(item){

                sum_outlight += item.quantity.outlight

             });
            return sum_outlight

        },
        getEmptyProductQuantity(){
            let sum_empty = 0;

            this.$store.getters.getProducts.forEach(function(item){

                sum_empty += item.quantity.empty

            });
            return sum_empty

        },
        getNormalProductQuantity(){
            let sum_normal = 0;

            this.$store.getters.getProducts.forEach(function(item){

                sum_normal += item.quantity.normal

            });
            return sum_normal

        },

    }
}
</script>
