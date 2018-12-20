import Vue from 'vue';

import Router from '../router/router';
import Store from '../store/store';

import * as Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';

import Header from '../components/layouts/Header.vue';

Vue.use(Bootstrap);

const app = new Vue({
    el: '#app',
    router: Router,
    store: Store,
    components: {
        'nav-bar': Header,
    },
    data: function() {
        return {
            message: "Hello World!"
        }
    }
})