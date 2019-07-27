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

// Vue.component(
//     'passport-clients',
//     require('./components/passport/Clients.vue').default
// );

// Vue.component(
//     'passport-authorized-clients',
//     require('./components/passport/AuthorizedClients.vue').default
// );

// Vue.component(
//     'passport-personal-access-tokens',
//     require('./components/passport/PersonalAccessTokens.vue').default
// );

import routes from './routes.js';

const router = new VueRouter({ 
    mode: 'history', 
    routes: routes 
});

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');