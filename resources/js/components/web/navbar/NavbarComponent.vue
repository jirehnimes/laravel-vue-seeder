<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">{{ MIX_ENV.appName }}</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">Profile</router-link>
                    </li>
                </ul>

                <div class="form-inline my-2 my-lg-0">
                    <span v-if="!isLoggedIn">
                        <router-link to="/login" class="btn btn-outline-success">Login</router-link>
                        <router-link to="/register" class="btn btn-outline-success">Register</router-link>
                    </span>
                    <span v-if="isLoggedIn">
                        <button class="btn btn-outline-success" v-on:click="logout">Logout</button>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script src="./navbar.js"></script>
