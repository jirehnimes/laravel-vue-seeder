const ROOT_API = '/api/auth';

const AuthRequestsServices = {
    login: (form) => {
        return axios.post(ROOT_API + '/login', form)
            .then(function(response) {
                return response;
            })
            .catch(function(error) {
                throw error.response.data.errors;
            });
    },

    register: (form) => {
        return axios.post(ROOT_API + '/register', form)
            .then(function(response) {
                return response;
            })
            .catch(function(error) {
                throw error.response.data.errors;
            });
    } 
}

export default AuthRequestsServices