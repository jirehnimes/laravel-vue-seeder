<template>
    <div class="container-fluid">
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    created: function () {
        let that = this

        this.$http.interceptors.response.use(undefined, function (err) {
            let errorResponse = err.response

            return new Promise(function (resolve, reject) {
                if (errorResponse.status === 401 && errorResponse.config && !errorResponse.config.__isRetryRequest) {
                    let pathExplode = that.$route.fullPath.split('/')

                    if (pathExplode[1] === 'admin') {
                        that.$store.dispatch('logout', { userLevel: 99 })
                            .then(() => {
                                that.$router.push('/admin')
                            })
                    } else {
                        that.$store.dispatch('logout', { userLevel: 1 })
                            .then(() => {
                                that.$router.push('/')
                            })
                    }
                }
                throw err;
            });
        });
    }
}
</script>