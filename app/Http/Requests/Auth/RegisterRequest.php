<?php

namespace App\Http\Requests\Auth;

use App\Models\User\User;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $email = User::VALIDATE_EMAIL;
        $email[] = 'unique:users';

        $password = User::VALIDATE_PASSWORD;
        $password[] = 'confirmed';

        return [
            'first_name' => User::VALIDATE_FIRST_NAME,
            'last_name'  => User::VALIDATE_LAST_NAME,
            'email'      => $email,
            'password'   => $password,
            'user_level' => 'unique:users'
        ];
    }
}
