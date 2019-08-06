import RequestsServices from './requests.js'

let Requests = new RequestsServices()

const UserRequestsServices = {
    getUsers: () => {
        return Requests.get('/users')
            .then(function(response) {
                return response
            })
            .catch(function(error) {
                // throw error.response.data.errors
            })
    }
}

export default UserRequestsServices