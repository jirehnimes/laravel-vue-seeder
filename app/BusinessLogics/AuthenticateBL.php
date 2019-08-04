<?php

namespace App\BusinessLogics;

use App\Models\Token;
use App\Models\User\Admin;
use App\Repositories\Eloquent\UserRepository;
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
     * Register a user by level.
     * 
     * @param array   $requestInput Validated request input.
     * @param integer $userLevel    User level.
     * 
     * @return object User details.
     */
    public function register($requestInput, $userLevel = 1)
    {
        if ($userLevel === Admin::USER_LEVEL) {
            $requestInput['user_level'] = $userLevel;
        }

        $validate = $this->_validateEmailWithUserLevel($requestInput, $userLevel);        

        if ($validate !== true) {
            return $validate;
        }

        $user = $this->userRepository->create($requestInput);

        $user['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;

        return $user;
    }

    /**
     * Custom validator to check user if unique by email address and user level.
     * 
     * @param  array $requestInput Request input data.
     * @param  int   $userLevel    User level.
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