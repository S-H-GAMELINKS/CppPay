import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../components/web/Index.vue';
import About from '../components/web/About.vue';
import Contact from '../components/web/Contact.vue';

import Products from '../components/product/Index.vue';
import Create from '../components/product/Create.vue';
import Show from '../components/product/Show.vue';
import Edit from '../components/product/Edit.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/products', component: Products },
    { path: '/products/create', component: Create },
    { path: '/products/:id', component: Show, name: 'products'},
    { path: '/products/edit/:id', component: Edit, name: 'edits'},
  ],
})