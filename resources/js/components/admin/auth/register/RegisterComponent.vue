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
                        <h3>Register</h3>

                        <form role="form">
                            <div class="card-body">
                                <div class="form-group">
                                    <label>First name</label>
                                    <input type="text" class="form-control" 
                                        :class="[FormHelper.is_invalid(form.errors.first_name)]"
                                        placeholder="First name" v-model="form.data.first_name">
                                    <div class="invalid-feedback">{{ FormHelper.display_error(form.errors.first_name) }}</div>
                                </div>
                                
                                <div class="form-group">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" 
                                        :class="[FormHelper.is_invalid(form.errors.last_name)]"
                                        placeholder="Last name" v-model="form.data.last_name">
                                    <div class="invalid-feedback">{{ FormHelper.display_error(form.errors.last_name) }}</div>
                                </div>

                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" 
                                        :class="[FormHelper.is_invalid(form.errors.email)]" 
                                        placeholder="Email Address" v-model="form.data.email">
                                    <div class="invalid-feedback">{{ FormHelper.display_error(form.errors.email) }}</div>
                                </div>

                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" 
                                        :class="[FormHelper.is_invalid(form.errors.password)]"
                                        placeholder="Password" v-model="form.data.password">
                                    <div class="invalid-feedback">{{ FormHelper.display_error(form.errors.password) }}</div>
                                </div>

                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Password" v-model="form.data.password_confirmation">
                                </div>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary" v-on:click="submit">Register</button>
                                <router-link to="/admin/login" class="btn btn-outline-success">Login</router-link>
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

<script src="./register.js"></script>
