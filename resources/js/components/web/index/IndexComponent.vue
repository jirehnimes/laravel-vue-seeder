<template>
    <div class="container-fluid" style="background-color: white;">
        <h1 v-if="!isLoggedIn">Not Logged In</h1>
        <h1 v-if="isLoggedIn">Logged In</h1>
    </div>
</template>

<script type="text/javascript">
    export default {
        computed : {
            isLoggedIn : function() { return this.$store.getters.isLoggedIn }
        }
    }
</script>