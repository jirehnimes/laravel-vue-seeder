<template>
    <div class="container-fluid">
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    created: function () {
        this.$http.interceptors.response.use(undefined, function (err) {
            return new Promise(function (resolve, reject) {
                if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                    console.log('Token expired.')
                    // this.$store.dispatch(logout)
                }
                throw err;
            });
        });
    }
}
</script>