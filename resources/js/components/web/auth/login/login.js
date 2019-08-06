import AuthRequestsServices from '../../../../services/requests/auth.js'
import AuthHelpersServices from '../../../../services/helpers/auth.js'
import FormHelpersServices from '../../../../services/helpers/form.js'

export default {
    data() {
        return {
            form: {
                init: {
                    email: this.$store.getters.userName('web') || '',
                    password: '',
                    remember_me: false
                },
                data: {},
                errors: {
                    email: [],
                    password: [],
                    authenticate: []
                }
            }
        }
    },
    created() {
        this.FormHelper = new FormHelpersServices(this.form)
        this.form = this.FormHelper.initialize_form_data()
    },
    methods: {
        submit(event) {
            let that = this

            AuthHelpersServices.authenticate(that, this.form.data)
                .then(response => {
                    that.form = that.FormHelper.initialize_form_data()
                    that.form = that.FormHelper.initialize_form_errors()
                })
                .catch(error => {
                    if (error.status === 401) {
                        that.form.errors.authenticate[0] = 'Invalid email address or password. Try again.'
                    } else {
                        that.form = that.FormHelper.update_error_fields(error.data.errors)
                    }

                    that.form = that.FormHelper.initialize_form_data()
                })

            event.preventDefault()
        }
    }
}