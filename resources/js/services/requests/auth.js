const API_URL = '/api/user';

const AuthRequestsServices = {
    login: (form) => {
        return axios.post(API_URL, form);
    },

    register: (form) => {
        return axios.post(API_URL, form)
            .then(function(response) {
                return response;
            })
            .catch(function(error) {
                throw error.response.data.errors;
            });
    } 
}

export default AuthRequestsServices