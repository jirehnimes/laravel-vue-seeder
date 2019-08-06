import AuthRequestsServices from '../requests/auth.js'
import Admin from '../../models/admin.js'
import User from '../../models/user.js'

const AuthHelpersServices = {
    authenticate(that, form, level = 1) {
        return new Promise((resolve, reject) => {
            let userType = (level === Admin.LEVEL) ? 'admin' : 'web'
            let functionName = 'login'
            let redirect = '/'

            if (level === Admin.LEVEL) {
                functionName = 'adminLogin'
                redirect = '/admin/home'
            }

            if (that.$store.getters.getRemember(userType)) {
                form['remember_token'] = that.$store.getters.getRemember(userType)
            }

            AuthRequestsServices[functionName](form) 
                .then(function(response) {
                    if (response.status === 200) {
                        that.$store.dispatch('login', response.data.original)
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