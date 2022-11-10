<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        /* @var User $user*/
        $user = Auth::user();
        $roleId = $user->role?->id;

        return in_array($roleId, [1, 2]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['string', 'required', 'max:100'],
            'email' => ['string', 'required', 'max:100', 'email', 'unique:users,email'],
            'password' => ['string', 'required', 'confirmed', 'min:8'],
            'role_id' => ['numeric', 'required', 'exists:roles,id'],
        ];
    }
}
