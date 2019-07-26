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
                                        :class="[FormHelper.is_invalid(form_errors.first_name)]"
                                        placeholder="First name" v-model="form.first_name">
                                    <div class="invalid-feedback">{{ form_errors.first_name[0] }}</div>
                                </div>
                                
                                <div class="form-group">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" 
                                        :class="[FormHelper.is_invalid(form_errors.last_name)]"
                                        placeholder="Last name" v-model="form.last_name">
                                    <div class="invalid-feedback">{{ form_errors.last_name[0] }}</div>
                                </div>

                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" 
                                        :class="[FormHelper.is_invalid(form_errors.email)]" 
                                        placeholder="Email Address" v-model="form.email">
                                    <div class="invalid-feedback">{{ form_errors.email[0] }}</div>
                                </div>

                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" 
                                        :class="[FormHelper.is_invalid(form_errors.password)]"
                                        placeholder="Password" v-model="form.password">
                                    <div class="invalid-feedback">{{ form_errors.password[0] }}</div>
                                </div>

                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Password" v-model="form.password_confirmation">
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
