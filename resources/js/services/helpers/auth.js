import AuthRequestsServices from '../requests/auth.js'
import Admin from '../../models/admin.js'
import User from '../../models/user.js'

const AuthHelpersServices = {
    authenticate(that, form, level = 1) {
        let _form = {
            email: form.email,
            password: form.password
        }

        return new Promise((resolve, reject) => {
            if (level === Admin.LEVEL) {
                AuthRequestsServices.adminLogin(_form)
                    .then(function(response) {
                        if (response.status === 200) {
                            let params = {
                                responseData: response.data,
                                userLevel: level
                            }

                            that.$store.dispatch('login', params)
                                .then(() => {
                                    that.$router.push('/admin/home')
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
            } else {
                AuthRequestsServices.login(_form)
                    .then(function(response) {
                        if (response.status === 200) {
                            let params = {
                                responseData: response.data,
                                userLevel: level
                            }

                            that.$store.dispatch('login', params)
                                .then(() => {
                                    that.$router.push('/')
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
            }
        })
    }
}

export default AuthHelpersServices