<?php

namespace App\Http\Controllers;

use App\BusinessLogics\AuthenticateBL;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Token;
use App\Models\User\Admin;
use App\Models\User\User;
use Auth;
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
     * @param  Request $request [description]
     * 
     * @return [type]           [description]
     */
    public function login(LoginRequest $request)
    {
        $input = $request->input();
        if (Auth::attempt(['email' => $input['email'], 'password' => $input['password'], 'user_level' => User::USER_LEVEL])) {
            $user = User::where(['email' => $input['email'], 'user_level' => User::USER_LEVEL])->first();
            $user['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;

            return response()->json($user);
        }
        return response()->json(false, 402);
    }

    /**
     * User registration.
     * 
     * @param  RegisterRequest $request [description]
     * 
     * @return [type]                   [description]
     */
    public function register(RegisterRequest $request)
    {
        $user = $this->authenticateBL->register($request->input());

        return response()->json($user);
    }

    /**
     * 
     * 
     * @param  Request $request [description]
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
     * @return JSON response.
     */
    public function adminLogin(LoginRequest $request)
    {
        $input = $request->input();
        if (Auth::attempt(['email' => $input['email'], 'password' => $input['password'], 'user_level' => Admin::USER_LEVEL])) {
            $user = User::where(['email' => $input['email'], 'user_level' => Admin::USER_LEVEL])->first();
            $user['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;

            return response()->json($user);
        }
        return response()->json(false, 402);
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
