<?php

namespace App\Repositories\Eloquent;

use App\Models\Token;
use App\Repositories\Eloquent\Repository;

class UserRepository extends Repository
{
    /**
     * Specify Model class name
     *
     * @return mixed
     */
    public function model()
    {
        return 'App\Models\User\User';
    }

    /**
     * Custom create method.
     * 
     * @param array $data Request input.
     * 
     * @return object       User instance.
     */
    public function create(array $data) 
    {
        $form = [
            'first_name' => $data['first_name'],
            'last_name'  => $data['last_name'],
            'email'      => $data['email'],
            'password'   => \Hash::make($data['password'])
        ];

        if (isset($data['user_level'])) {
            $form['user_level'] = $data['user_level'];
        }

        return $this->model->create($form);
    }
}