export default {
    data() {
        return {
            form_email_address: '',
            form_password: ''
        }
    },
    mounted() {
    },
    methods: {
        submit(event) {
            console.log(this.form_email_address);
            console.log(this.form_password);
            event.preventDefault();
        }
    }
}