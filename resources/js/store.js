import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import Admin from './models/admin.js'
import User from './models/user.js'

Vue.use(Vuex)

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
            token: localStorage.getItem(User.TOKEN_NAME) || '',
            user : {}
        },
        admin: {
            status: '',
            token: localStorage.getItem(Admin.TOKEN_NAME) || '',
            user : {}
        }
    },
    mutations: {
        auth_request(state, userLevel) {
            state[getKeyByLevel(userLevel)].status = 'loading'
        },
        auth_success(state, params) {
            let keyLevel = getKeyByLevel(params.userLevel)

            state[keyLevel].status = 'success'
            state[keyLevel].token = params.token
            state[keyLevel].user = params.user
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
                let token = params.token
                let user = params
                let level = params.user_level

                commit('auth_request', level)

                if (level === Admin.LEVEL) {
                    localStorage.setItem(Admin.TOKEN_NAME, token)
                } else {
                    localStorage.setItem(User.TOKEN_NAME, token)
                }

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

                commit(
                    'auth_success', 
                    {
                        token: token, 
                        user: user, 
                        userLevel: level
                    }
                )

                resolve(true)
            })
        },
        logout({commit}, params) {
            return new Promise((resolve, reject) => {
                commit('logout', params.userLevel)

                if (params.userLevel === Admin.LEVEL) {
                    localStorage.removeItem(Admin.TOKEN_NAME)
                } else {
                    localStorage.removeItem(User.TOKEN_NAME)
                }

                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters : {
        isLoggedIn: state => userLevel => !!state[userLevel].token,
        authStatus: state => userLevel => state[userLevel].status,
        userToken: state => userLevel => state[userLevel].token
    }
})