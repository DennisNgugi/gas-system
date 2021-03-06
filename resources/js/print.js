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
import storeData from "./store/index"
Vue.component('print-component',require('./components/Printer/Print.vue').default)
const store = new Vuex.Store(storeData);

new Vue({
    el: '#print',
    store,
});
