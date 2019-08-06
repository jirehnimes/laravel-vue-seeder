<?php

namespace App\Http\Controllers;

use App\BusinessLogics\AuthenticateBL;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User\Admin;
use App\Models\User\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * UserController constructor.
     */
    public function __construct()
    {
        $this->authenticateBL = new AuthenticateBL();
    }

    /**
     * User login.
     * 
     * @param Request $request Validated request instance.
     * 
     * @return User instance or false.
     */
    public function login(LoginRequest $request)
    {
        $user = $this->authenticateBL->login($request->input(), User::USER_LEVEL);

        if ($user === false) {
            return response()->json(false, 401);
        }

        return response()->json($user);
    }

    /**
     * User registration.
     * 
     * @param RegisterRequest $request Validated request instance.
     * 
     * @return [type]                   [description]
     */
    public function register(RegisterRequest $request)
    {
        $user = $this->authenticateBL->register($request->input(), User::USER_LEVEL);

        return response()->json($user);
    }

    /**
     * User forgot password.
     * 
     * @param Request $request [description]
     * 
     * @return [type]           [description]
     */
    public function forgotPassword(Request $request)
    {

    }

    /**
     * Admin login.
     * 
     * @param LoginRequest $request Validated request data.
     * 
     * @return User instance or false
     */
    public function adminLogin(LoginRequest $request)
    {
        $user = $this->authenticateBL->login($request->input(), Admin::USER_LEVEL);

        if ($user === false) {
            return response()->json(false, 401);
        }

        return response()->json($user);
    }

    /**
     * Admin registration.
     * 
     * @param RegisterRequest $request Validated request data.
     * 
     * @return JSON response.
     */
    public function adminRegister(RegisterRequest $request)
    {
        $user = $this->authenticateBL->register($request->input(), Admin::USER_LEVEL);

        return response()->json($user);
    }
}
