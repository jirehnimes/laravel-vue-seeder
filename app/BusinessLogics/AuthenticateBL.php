<?php

namespace App\BusinessLogics;

use App\Models\Token;
use App\Models\User\Admin;
use App\Models\User\User;
use App\Repositories\Eloquent\UserRepository;
use Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AuthenticateBL extends BusinessLogic
{
    /**
     * AuthenticateBL constructor.
     */
    public function __construct()
    {
        $this->userRepository = new UserRepository();
    }

    /**
     * Login user credentials by level.
     * 
     * @param array $requestInput Request input.
     * @param int   $userLevel    User or admin.
     * 
     * @return User instance or false.
     */
    public function login($requestInput, $userLevel)
    {
        $attempt = Auth::attempt(
            [
                'email'      => $requestInput['email'], 
                'password'   => $requestInput['password'], 
                'user_level' => $userLevel
            ],
            $requestInput['remember_me']
        );

        if ($attempt) {
            $user = User::where(['email' => $requestInput['email'], 'user_level' => $userLevel])->first();

            $user['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;

            return response()->json($user);
        }

        return false;
    }

    /**
     * Register a user by level.
     * 
     * @param array   $requestInput Validated request input.
     * @param integer $userLevel    User level.
     * 
     * @return object User details.
     */
    public function register($requestInput, $userLevel)
    {
        $requestInput['user_level'] = $userLevel;

        $validate = $this->_validateEmailWithUserLevel($requestInput, $userLevel);

        if ($validate !== true) {
            return $validate;
        }

        $user = $this->userRepository->create($requestInput);

        return $user;
    }

    /**
     * Custom validator to check user if unique by email address and user level.
     * 
     * @param array $requestInput Request input data.
     * @param int   $userLevel    User level.
     * 
     * @return Validator class.
     */
    private function _validateEmailWithUserLevel($requestInput, $userLevel)
    {
        $validator = Validator::make(
            $requestInput,
            [
                'email' => Rule::unique('users')->where(
                    function ($query) use ($userLevel) {
                        return $query->where('user_level', $userLevel);
                    }
                )
            ],
            [
                'email.unique' => 'Email address already existed.'
            ]
        );

        if ($validator->fails()) {
            return $validator->messages();
        }

        return true;
    }
}