import AuthRequestsServices from '../../../../services/requests/auth.js'
import AuthHelpersServices from '../../../../services/helpers/auth.js'
import FormHelpersServices from '../../../../services/helpers/form.js'

export default {
    data() {
        return {
            form: {
                init: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                data: {},
                errors: {
                    first_name: [],
                    last_name: [],
                    email: [],
                    password: []
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
            var that = this

            AuthRequestsServices.register(this.form.data)
                .then(function(response) {
                    response.data['password'] = that.form.data.password
                    
                    that.form = that.FormHelper.initialize_form_data()
                    that.form = that.FormHelper.initialize_form_errors()

                    if (response.status === 200) {
                        AuthHelpersServices.authenticate(that, response.data)
                    }
                })
                .catch(function(error) {
                    that.form = that.FormHelper.update_error_fields(error)

                    that.form.data.password = ''
                    that.form.data.password_confirmation = ''
                })

            event.preventDefault()
        }
    }
}