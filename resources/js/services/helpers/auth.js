import AuthRequestsServices from '../requests/auth.js'
import Admin from '../../models/admin.js'
import User from '../../models/user.js'

const AuthHelpersServices = {
    authenticate(that, form, level = 1) {
        return new Promise((resolve, reject) => {
            let functionName = 'login'
            let redirect = '/'

            if (level === Admin.LEVEL) {
                functionName = 'adminLogin'
                redirect = '/admin/home'
            }

            AuthRequestsServices[functionName](form) 
                .then(function(response) {
                    if (response.status === 200) {
                        let params = {
                            responseData: response.data.original,
                            userLevel: level
                        }

                        that.$store.dispatch('login', params)
                            .then(() => {
                                that.$router.push(redirect)
                                resolve(true)
                            })
                            .catch(error => {
                                reject(error)
                            })
                    }
                })
                .catch(function(error) {
                    reject(error)
                })
        })
    }
}

export default AuthHelpersServices