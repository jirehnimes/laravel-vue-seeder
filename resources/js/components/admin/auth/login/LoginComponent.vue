<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">{{ MIX_ENV.appName }}</h3>
                    </div>
                    <!-- /.card-header -->

                    <div class="card-body">
                        <h3>Login</h3>

                        <form role="form">
                            <div class="card-body">
                                <div class="alert alert-danger" role="alert" v-if="FormHelper.display_error(form.errors.authenticate)">
                                    {{ FormHelper.display_error(form.errors.authenticate) }}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="text" class="form-control" 
                                        :class="[FormHelper.is_invalid(form.errors.email)]"
                                        placeholder="Email address" v-model="form.data.email">
                                    <div class="invalid-feedback">{{ FormHelper.display_error(form.errors.email) }}</div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" 
                                        :class="[FormHelper.is_invalid(form.errors.password)]"
                                        placeholder="Password" v-model="form.data.password">
                                    <div class="invalid-feedback">{{ FormHelper.display_error(form.errors.password) }}</div>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" v-model="form.data.remember_me">
                                    <label class="form-check-label">Remember me</label>
                                </div>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary" v-on:click="submit">Login</button>
                                <router-link to="/admin/register" class="btn btn-outline-success">Register</router-link>
                            </div>
                        </form>
                        <!-- /form -->
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
    </div>
</template>

<style type="text/css">
    .card {
        margin-top: 50px;
    }
</style>

<script src="./login.js"></script>
