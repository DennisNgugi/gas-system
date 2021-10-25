<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header p-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link active" href="#transfers" data-toggle="tab">Transfers</a></li>
                        <li class="nav-item"><a class="nav-link" href="#sales" data-toggle="tab">Sales</a></li>
                        <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                    </ul>
                </div><!-- /.card-header -->
                <div class="card-body">
                    <div class="tab-content">
                        <div class="active tab-pane" id="transfers">
                            <table class="table table-responsive-md table-bordered">  <tr>
                                <th>Date</th>
                                <th>Quantity</th>
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
                                    <td v-text=""></td>
                                    <!--                            <td v-if="t.branches.branch_name !=''">{{ t.branches.branch_name }}</td>-->
                                    <td v-text=""></td>

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
                        <!-- /.tab-pane -->
                        <div class="tab-pane" id="sales">
                            <!-- The sales -->
                            <div class="sales sales-inverse">
                                <!-- sales time label -->
                                <div class="time-label">
                        <span class="bg-danger">
                          10 Feb. 2014
                        </span>
                                </div>
                                <!-- /.sales-label -->
                                <!-- sales item -->
                                <div>
                                    <i class="fas fa-envelope bg-primary"></i>

                                    <div class="sales-item">
                                        <span class="time"><i class="far fa-clock"></i> 12:05</span>

                                        <h3 class="sales-header"><a href="#">Support Team</a> sent you an email</h3>

                                        <div class="sales-body">
                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                            quora plaxo ideeli hulu weebly balihoo...
                                        </div>
                                        <div class="sales-footer">
                                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- END sales item -->
                                <!-- sales item -->
                                <div>
                                    <i class="fas fa-user bg-info"></i>

                                    <div class="sales-item">
                                        <span class="time"><i class="far fa-clock"></i> 5 mins ago</span>

                                        <h3 class="sales-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                        </h3>
                                    </div>
                                </div>
                                <!-- END sales item -->
                                <!-- sales item -->
                                <div>
                                    <i class="fas fa-comments bg-warning"></i>

                                    <div class="sales-item">
                                        <span class="time"><i class="far fa-clock"></i> 27 mins ago</span>

                                        <h3 class="sales-header"><a href="#">Jay White</a> commented on your post</h3>

                                        <div class="sales-body">
                                            Take me to your leader!
                                            Switzerland is small and neutral!
                                            We are more like Germany, ambitious and misunderstood!
                                        </div>
                                        <div class="sales-footer">
                                            <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- END sales item -->
                                <!-- sales time label -->
                                <div class="time-label">
                        <span class="bg-success">
                          3 Jan. 2014
                        </span>
                                </div>
                                <!-- /.sales-label -->
                                <!-- sales item -->
                                <div>
                                    <i class="fas fa-camera bg-purple"></i>

                                    <div class="sales-item">
                                        <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                                        <h3 class="sales-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                        <div class="sales-body">
                                            <img src="https://placehold.it/150x100" alt="...">
                                            <img src="https://placehold.it/150x100" alt="...">
                                            <img src="https://placehold.it/150x100" alt="...">
                                            <img src="https://placehold.it/150x100" alt="...">
                                        </div>
                                    </div>
                                </div>
                                <!-- END sales item -->
                                <div>
                                    <i class="far fa-clock bg-gray"></i>
                                </div>
                            </div>
                        </div>
                        <!-- /.tab-pane -->

                        <div class="tab-pane" id="settings">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputName" placeholder="Name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputName2" class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputName2" placeholder="Name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputExperience" class="col-sm-2 col-form-label">Experience</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputSkills" class="col-sm-2 col-form-label">Skills</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputSkills" placeholder="Skills">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-danger">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.tab-pane -->
                    </div>
                    <!-- /.tab-content -->
                </div><!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>

    </div>
</template>

<script>
export default {
    name: "View.vue",
    data(){
        return{
            product:[],
            transfer:[]
        }
    },
    mounted() {
        this.getProductDetail()
    },

    methods:{
        getProductDetail(){
            axios.get(`/product/view/${this.$route.params.id}`).then( response => {
                this.product = response.data.productsDetail
            })
        },

    }
}
</script>

<style scoped>

</style>
