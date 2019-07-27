import { ROOT_API } from './requests.js';

const API_ENDPOINT = ROOT_API + '/auth';

const AuthRequestsServices = {
    login: (form) => {
        return axios.post(API_ENDPOINT + '/login', form)
            .then(function(response) {
                return response;
            })
            .catch(function(error) {
                throw error.response.data.errors;
            });
    },

    register: (form) => {
        return axios.post(API_ENDPOINT + '/register', form)
            .then(function(response) {
                return response;
            })
            .catch(function(error) {
                throw error.response.data.errors;
            });
    }
}

export default AuthRequestsServices