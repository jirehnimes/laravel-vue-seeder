<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    const AUTH_ENV_KEY = 'ADMIN_AUTHORIZATION_KEY';

    const REQUEST_HEADER = 'Admin-Authorization';

    const USER_LEVEL = 99;
}
