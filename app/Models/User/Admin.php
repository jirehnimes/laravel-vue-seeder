<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    /**
     * Admin authorization key name in environment variables.
     */
    const AUTH_ENV_KEY = 'ADMIN_AUTHORIZATION_KEY';

    /**
     * Customer header authorization name.
     */
    const REQUEST_HEADER = 'Admin-Authorization';

    /**
     * Level of registered admin user.
     */
    const USER_LEVEL = 99;
}
