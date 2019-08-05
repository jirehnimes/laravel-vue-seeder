require('./bootstrap.js');

// Packages

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import { store } from './store.js';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// Configs

import routes from './routes.js';

const router = new VueRouter({ 
    mode: 'history', 
    routes: routes 
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let pathExplode = to.path.split('/')

        if (pathExplode[1] === 'admin') {
            if (store.getters.isLoggedIn('admin')) {
                next()
                return
            }
            next('/admin/login')
        } else {
            if (store.getters.isLoggedIn('web')) {
                next()
                return
            }
            next('/login')
        }
    } else {
        next() 
    }
})

new Vue(Vue.util.extend({ store, router }, App)).$mount('#app');