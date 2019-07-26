export default {
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            form_email_address: ''
        }
    },
    mounted() {
    },
    methods: {
        submit: function(event) {
            console.log(this.form_email_address);
            event.preventDefault();
        }
    }
}