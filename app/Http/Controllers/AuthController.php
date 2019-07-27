<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Repositories\Eloquent\UserRepository;
use App\Models\User\User;
use App\Models\Token;
use Auth;

class AuthController extends Controller
{
     /**
     * UserController constructor.
     */
    public function __construct()
    {
        $this->userRepository = new UserRepository();
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
        if (Auth::attempt(['email' => $input['email'], 'password' => $input['password']])) {
            $user = User::where(['email' => $input['email']])->first();
            $user['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;

            return response()->json($user);
        }
        return response()->json(false);
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
        $input = $request->input();
        $user = $this->userRepository->create($input);
        $user['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;
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
}
