export default {
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
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
    mounted() {
    },
    methods: {
        submit: function(event) {
            axios.post('/api/user', this.form)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error.response.data.errors)
                });

            event.preventDefault();
        }
    }
}