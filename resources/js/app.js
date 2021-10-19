require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(axios);
Vue.use(VueRouter);

import vSelect from 'vue-select'
Vue.component('vue-select', vSelect)
import 'vue-select/dist/vue-select.css';



import swal from 'sweetalert2';
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'bottom-start',
  showConfirmButton: false,
  timer: 2000,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', swal.stopTimer)
    toast.addEventListener('mouseleave', swal.resumeTimer)
  }
});
window.toast = toast;
Vue.component('InfiniteLoading', require('vue-infinite-loading'));
var numeral = require("numeral");

Vue.filter("formatNumber", function (value) {
    return numeral(value).format("0,0.00"); // displaying other groupings/separators is possible, look at the docs
});
import Vuetify  from "../plugins/vuetify";

import {routes} from './router'
import storeData from "./store/index"

const store = new Vuex.Store(storeData);
const router = new VueRouter({
    routes,
    mode:'history'
})
new Vue({
    el: '#app',
    vuetify:Vuetify,
    router,
    store,
});
