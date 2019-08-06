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
        $attemptConditions = [
            'email'      => $requestInput['email'], 
            'password'   => $requestInput['password'], 
            'user_level' => $userLevel
        ];

        if (isset($requestInput['remember_token'])) {
            $attemptConditions['remember_token'] = $requestInput['remember_token'];
        }

        $attempt = Auth::attempt($attemptConditions, $requestInput['remember_me']);

        if ($attempt) {
            $user = User::where(['email' => $requestInput['email'], 'user_level' => $userLevel])->first();

            $returnData['email'] = $user['email'];
            $returnData['user_level'] = $user['user_level'];
            $returnData['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;

            if ($requestInput['remember_me']) {
                $returnData['remember'] = $user['remember_token'];
            } else {
                $user->remember_token = null;
                $user->save();
            }

            return response()->json($returnData);
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