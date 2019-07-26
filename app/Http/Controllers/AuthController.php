<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\User\RegisterRequest;
use App\Repositories\Eloquent\UserRepository;

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
    public function login(Request $request)
    {

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
        $result = $this->userRepository->create($input);
        return response()->json($result);
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
