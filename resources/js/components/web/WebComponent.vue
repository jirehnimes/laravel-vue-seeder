<template>
    <div class="container-fluid">
        <web-navbar></web-navbar>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
import WebNavbar from './navbar/NavbarComponent.vue';

export default {
    components: {
        'web-navbar': WebNavbar
    },
    data() {
        return {
            app_name: process.env.MIX_APP_NAME
        }
    },
    mounted() {
    }
}
</script>