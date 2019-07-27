import AuthRequestsServices from '../requests/auth.js'

const AuthHelpersServices = {
    authenticate(that, form) {
        let _form = {
            email: form.email,
            password: form.password
        }

        return new Promise((resolve, reject) => {
            AuthRequestsServices.login(_form)
                .then(function(response) {
                    if (response.status === 200) {
                        that.$store.dispatch('login', response.data)
                            .then(() => {
                                resolve(true)
                                that.$router.push('/')
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