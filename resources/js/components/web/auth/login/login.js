import AuthRequestsServices from '../../../../services/requests/auth.js';
import FormHelpersServices from '../../../../services/helpers/form.js';

export default {
    data() {
        return {
            form: {
                init: {
                    email: '',
                    password: ''
                },
                data: {},
                errors: {
                    email: [],
                    password: []
                }
            }
        }
    },
    created() {
        this.FormHelper = new FormHelpersServices(this.form);
        this.form = this.FormHelper.initialize_form_data();
    },
    methods: {
        submit(event) {
            var that = this;

            AuthRequestsServices.login(this.form.data)
                .then(function(response) {
                    that.form = that.FormHelper.initialize_form_data();
                    that.form = that.FormHelper.initialize_form_errors();

                    if (response.status === 200) {
                        // Do execute login here.
                    }
                })
                .catch(function(error) {
                    that.form = that.FormHelper.update_error_fields(error);
                    that.form = that.FormHelper.initialize_form_data();
                });

            event.preventDefault();
        }
    }
}