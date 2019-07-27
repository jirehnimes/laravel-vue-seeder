<?php

namespace App\Models\User;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
// use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    // use EntrustUserTrait;

    /**
     * Constant database table name
     */
    const TABLE = 'users';

    /**
     * Field validators.
     */
    const VALIDATE_FIRST_NAME = ['required', 'string', 'max:255'];
    const VALIDATE_LAST_NAME = ['required', 'string', 'max:255'];
    const VALIDATE_EMAIL = ['required', 'string', 'email', 'max:255'];
    const VALIDATE_PASSWORD = ['required', 'string', 'min:8'];

    /**
     * Defined database table name
     * @var string
     */
    protected $table = self::TABLE;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
