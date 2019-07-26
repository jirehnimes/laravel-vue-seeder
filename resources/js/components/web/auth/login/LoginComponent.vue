<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2"></div>

            <div class="col-md-8 center">
                <div class="box box-success">
                    <div class="box-header with-border">
                        <h3 class="box-title">Login</h3>
                    </div>

                    <div class="box-body">
                        <form role="form">
                            <div class="card-body">
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" placeholder="Email Address" v-model="form_email_address">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password" v-model="form_password">
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input">
                                    <label class="form-check-label">Remember me</label>
                                </div>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary" v-on:click="submit">Login</button>
                                <router-link to="/register" class="btn btn-outline-success">Register</router-link>
                                <br><router-link to="/forgot_password">Forgot password</router-link>
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

<script src="./login.js"></script>
