export default {
    computed : {
        isLoggedIn : function() { return this.$store.getters.isLoggedIn }
    },  
    methods: {
        logout() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/')
                })
        }
    }
}