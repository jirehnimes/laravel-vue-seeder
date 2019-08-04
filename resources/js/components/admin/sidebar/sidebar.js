export default {
    methods: {
        logout() {
            this.$store.dispatch('logout', { userLevel: 99 })
                .then(() => {
                    this.$router.push('/admin/login')
                })
        }
    }
}