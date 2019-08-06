<template>
    <div class="container-fluid" style="background-color: white;">
        <h1>Profile Page</h1>
    </div>
</template>

<script type="text/javascript">
    import UsersRequestsServices from '../../../services/requests/user.js'

    export default {
        mounted() {
            UsersRequestsServices.getUsers()
                .then(function(response) {
                    console.log(response)
                })
        }
    }
</script>