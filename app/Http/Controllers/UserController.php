<?php

namespace App\Http\Controllers;

use App\Repositories\Eloquent\UserRepository;
use App\Models\User\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function testUsers()
    {
        $users = User::all();
        return response()->json($users);
    }
}
