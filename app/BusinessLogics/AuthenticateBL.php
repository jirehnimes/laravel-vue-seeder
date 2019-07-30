<?php

namespace App\BusinessLogics;

use App\Models\Token;
use App\Models\User\Admin;
use App\Repositories\Eloquent\UserRepository;

class AuthenticateBL extends BusinessLogic
{
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

        $user = $this->userRepository->create($requestInput);

        $user['token'] = $user->createToken(Token::createTokenName($user['email']))->accessToken;

        return $user;
    }
}