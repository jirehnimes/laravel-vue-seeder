import RequestsServices from './requests.js'

const ROOT_API = '/auth'

let Requests = new RequestsServices()

const AuthRequestsServices = {
    login: (form) => {
        return Requests.post(ROOT_API + '/login', form)
            .then(function(response) {
                return response
            })
            .catch(function(error) {
                throw error.response.data.errors
            })
    },

    register: (form) => {
        return Requests.post(ROOT_API + '/register', form)
            .then(function(response) {
                return response
            })
            .catch(function(error) {
                throw error.response.data.errors
            })
    },

    adminLogin: (form) => {
        return Requests.postAdmin(ROOT_API + '/login', form)
            .then(function(response) {
                return response
            })
            .catch(function(error) {
                throw error.response.data.errors
            })
    },

    adminRegister: (form) => {
        return Requests.postAdmin(ROOT_API + '/register', form)
            .then(function(response) {
                return response
            })
            .catch(function(error) {
                throw error.response.data.errors
            })
    },
}

export default AuthRequestsServices