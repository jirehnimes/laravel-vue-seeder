<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2"></div>

            <div class="col-md-8 center">
                <div class="box box-success">
                    <div class="box-header with-border">
                        <h3 class="box-title">Register</h3>
                    </div>

                    <div class="box-body">
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
                                <router-link to="/login" class="btn btn-outline-success">Login</router-link>
                            </div>
                        </form>
                    </div>
                <!-- /.box -->
                </div>
            <!-- /.col-md-8 -->
            </div>
        <!-- /.row -->
        </div>
    <!-- /.container-fluid -->
    </div>
</template>

<style type="text/css">
    .box.box-success {
        margin-top: 50px;
    }
</style>

<script src="./register.js"></script>
