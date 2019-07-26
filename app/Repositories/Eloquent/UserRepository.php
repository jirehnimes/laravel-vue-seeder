<?php

namespace App\Repositories\Eloquent;

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
        return $this->model->create(
            [
                'first_name' => $data['first_name'],
                'last_name'  => $data['last_name'],
                'email'      => $data['email'],
                'password'   => \Hash::make($data['password'])
            ]
        );
    }
}