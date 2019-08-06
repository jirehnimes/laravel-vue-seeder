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
                let token = store.getters.userToken('admin')
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                next()
                return
            }
            next('/admin/login')
        } else {
            if (store.getters.isLoggedIn('web')) {
                let token = store.getters.userToken('web')
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                next()
                return
            }
            next('/login')
        }
    } else {
        next() 
    }
})

Vue.mixin({
    data() {
        return {
            get MIX_ENV() {
                return {
                    appName: process.env.MIX_APP_NAME,
                    adminAuthKey: process.env.MIX_ADMIN_AUTHORIZATION_KEY
                } 
            }
        }
    }
})

new Vue(Vue.util.extend({ store, router }, App)).$mount('#app');