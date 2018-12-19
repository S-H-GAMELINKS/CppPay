import Vue from 'vue';

import * as Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';

import Header from '../components/layouts/Header.vue';

Vue.use(Bootstrap);

const app = new Vue({
    el: '#app',
    components: {
        'nav-bar': Header,
    },
    data: function() {
        return {
            message: "Hello World!"
        }
    }
})