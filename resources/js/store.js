import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import Admin from './models/admin.js'
import User from './models/user.js'

Vue.use(Vuex)

const tokenName = 'token'
const adminTokenName = 'admin-token'

function getKeyByLevel(userLevel) {
    if (userLevel === Admin.LEVEL) {
        return 'admin'
    } else {
        return 'web'
    }
}

// https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
export const store = new Vuex.Store({
    state: {
        web: {
            status: '',
            token: localStorage.getItem(tokenName) || '',
            user : {}
        },
        admin: {
            status: '',
            token: localStorage.getItem(adminTokenName) || '',
            user : {}
        }
    },
    mutations: {
        auth_request(state, userLevel) {
            state[getKeyByLevel(userLevel)].status = 'loading'
        },
        auth_success(state, token, user, userLevel) {
            let keyLevel = getKeyByLevel(userLevel)

            state[keyLevel].status = 'success'
            state[keyLevel].token = token
            state[keyLevel].user = user
        },
        auth_error(state, userLevel) {
            state[getKeyByLevel(userLevel)].status = 'error'
        },
        logout(state, userLevel) {
            state[getKeyByLevel(userLevel)].status = ''
            state[getKeyByLevel(userLevel)].token = ''
        }
    },
    actions: {
        login({commit}, params) {
            return new Promise((resolve, reject) => {
                commit('auth_request', params.userLevel)

                const token = params.responseData.token
                const user = params.responseData

                if (params.userLevel === Admin.LEVEL) {
                    localStorage.setItem(adminTokenName, token)
                } else {
                    localStorage.setItem(tokenName, token)
                }

                // axios.defaults.headers.common['Authorization'] = token;

                commit('auth_success', token, user, params.userLevel)

                resolve(true)
            })
        },
        logout({commit}, params) {
            return new Promise((resolve, reject) => {
                commit('logout', params.userLevel)

                if (params.userLevel === Admin.LEVEL) {
                    localStorage.removeItem(adminTokenName)
                } else {
                    localStorage.removeItem(tokenName)
                }

                // delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters : {
        isLoggedIn: state => userLevel => !!state[userLevel].token,
        authStatus: state => userLevel => state[userLevel].status
    }
})