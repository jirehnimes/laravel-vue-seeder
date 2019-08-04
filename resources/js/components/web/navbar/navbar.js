export default {
    computed : {
        isLoggedIn : function() { 
            return this.$store.getters.isLoggedIn('web')
        }
    },  
    methods: {
        logout() {
            this.$store.dispatch('logout', { userLevel: 1 })
                .then(() => {
                    this.$router.push('/')
                })
        }
    }
}