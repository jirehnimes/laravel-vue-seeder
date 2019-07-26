import AuthRequestsServices from '../../../../services/requests/auth.js';
import FormHelpersServices from '../../../../services/helpers/form.js';

export default {
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            form_errors: {
                first_name: [],
                last_name: [],
                email: [],
                password: []
            }
        }
    },
    created() {
        this.FormHelper = FormHelpersServices;
    },
    methods: {
        submit(event) {
            var that = this;

            AuthRequestsServices.register(this.form)
                .then(function(response) {
                    if (response.status === 200) {
                        // Do execute login here.
                    }
                })
                .catch(function(error) {
                    _.isEmpty(error.first_name) ? [] : that.form_errors.first_name = error.first_name;
                    _.isEmpty(error.last_name) ? [] : that.form_errors.last_name = error.last_name;
                    _.isEmpty(error.email) ? [] : that.form_errors.email = error.email;
                    _.isEmpty(error.password) ? [] : that.form_errors.password = error.password;

                    that.password = '';
                    that.password_confirmation = '';
                });

            event.preventDefault();
        }
    }
}