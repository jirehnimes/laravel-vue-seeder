<?php

namespace App\Models;

class Token
{
    public static function createTokenName($name) 
    {
        return config('app.name') . ' ' . $name;
    }

    public static function createToken($user)
    {
        
    }
}