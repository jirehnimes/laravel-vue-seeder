<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2"></div>

            <div class="col-md-8 center">
                <div class="box box-success">
                    <div class="box-header with-border">
                        <h3 class="box-title">Forgot Password</h3>
                    </div>

                    <div class="box-body">
                        <form role="form">
                            <div class="card-body">
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" placeholder="Email Address" v-model="form_email_address">
                                </div>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary" v-on:click="submit">Submit</button>
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

<script src="./forgotPassword.js"></script>
