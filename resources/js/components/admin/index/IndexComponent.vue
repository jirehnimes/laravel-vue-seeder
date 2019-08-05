<template>
</template>

<script type="text/javascript">
    export default {
        mounted() {
            if (this.$store.getters.isLoggedIn('admin')) {
                this.$router.push('/admin/home')
            } else {
                this.$router.push('/admin/login')
            }
        }
    }
</script>