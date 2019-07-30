import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const tokenName = 'token';
const adminTokenName = 'adminToken';

// https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
export const store = new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user : {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        }
    },
    actions: {
        login({commit}, responseData) {
            return new Promise((resolve, reject) => {
                commit('auth_request')

                const token = responseData.token;
                const user = responseData;

                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;

                commit('auth_success', token, user)

                resolve(true)
            })
        },
        logout({commit}) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})